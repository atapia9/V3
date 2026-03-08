// Configuration
const API_BASE_URL = 'https://daae643f-cc64-4281-9aa9-4720a70a1e76.builder.kiloapps.io';
const TOTAL_BLOCKS = 8160; // 1024x800 / 100 = 8160 blocks (10x10 pixels each)
const BLOCK_PRICE = 100; // USD

// DOM Elements
const pixelGrid = document.getElementById('pixel-grid');
const purchaseModal = document.getElementById('purchase-modal');
const closeModal = document.querySelector('.close-modal');
const purchaseForm = document.getElementById('purchase-form');
const selectedPositionEl = document.getElementById('selected-position');
const blockTooltip = document.getElementById('block-tooltip');
const totalBlocksEl = document.getElementById('total-blocks');
const occupiedBlocksEl = document.getElementById('occupied-blocks');
const availableBlocksEl = document.getElementById('available-blocks');

// State
let purchasedBlocks = [];
let selectedBlockPosition = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initGrid();
    fetchBlocks();
    setupEventListeners();
});

// Initialize empty grid
function initGrid() {
    pixelGrid.innerHTML = '';
    
    for (let i = 0; i < TOTAL_BLOCKS; i++) {
        const block = document.createElement('div');
        block.className = 'pixel-block available';
        block.dataset.position = i;
        
        // Add hover events
        block.addEventListener('mouseenter', (e) => showTooltip(e, i));
        block.addEventListener('mouseleave', hideTooltip);
        block.addEventListener('click', () => handleBlockClick(i));
        
        pixelGrid.appendChild(block);
    }
}

// Fetch blocks from API
async function fetchBlocks() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/blocks`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
            purchasedBlocks = data;
            renderPurchasedBlocks();
            updateStats();
        } else {
            console.warn('Unexpected API response format:', data);
        }
    } catch (error) {
        console.error('Error fetching blocks:', error);
        showError('No se pudieron cargar los bloques. Por favor, intenta más tarde.');
    }
}

// Render purchased blocks on the grid
function renderPurchasedBlocks() {
    const blocks = pixelGrid.querySelectorAll('.pixel-block');
    
    purchasedBlocks.forEach(blockData => {
        const position = blockData.position;
        
        if (position >= 0 && position < TOTAL_BLOCKS && blocks[position]) {
            const blockEl = blocks[position];
            blockEl.classList.remove('available');
            blockEl.classList.add('occupied');
            
            // Set background color or image
            if (blockData.image) {
                blockEl.style.backgroundImage = `url(${blockData.image})`;
                blockEl.style.backgroundSize = 'cover';
                blockEl.style.backgroundPosition = 'center';
            } else if (blockData.color) {
                blockEl.style.backgroundColor = blockData.color;
            }
            
            // Store block data for tooltip
            blockEl.dataset.blockData = JSON.stringify(blockData);
        }
    });
}

// Update statistics
function updateStats() {
    const occupied = purchasedBlocks.length;
    const available = TOTAL_BLOCKS - occupied;
    
    totalBlocksEl.textContent = TOTAL_BLOCKS.toLocaleString();
    occupiedBlocksEl.textContent = occupied.toLocaleString();
    availableBlocksEl.textContent = available.toLocaleString();
}

// Handle block click
function handleBlockClick(position) {
    const block = pixelGrid.querySelector(`[data-position="${position}"]`);
    
    // Check if block is already purchased
    const isOccupied = block.classList.contains('occupied');
    
    if (isOccupied) {
        // Show info about the occupied block
        const blockData = purchasedBlocks.find(b => b.position === position);
        if (blockData) {
            alert(`Este bloque ya está ocupado:\n\nAnunciante: ${blockData.advertiser || 'N/A'}\nURL: ${blockData.url || 'N/A'}`);
        }
        return;
    }
    
    // Deselect previous selected block
    const previousSelected = pixelGrid.querySelector('.pixel-block.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
    
    // Select new block
    block.classList.add('selected');
    selectedBlockPosition = position;
    
    // Open purchase modal
    openModal(position);
}

// Open purchase modal
function openModal(position) {
    selectedPositionEl.textContent = `#${position}`;
    purchaseModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close purchase modal
function closePurchaseModal() {
    purchaseModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset form
    purchaseForm.reset();
    selectedBlockPosition = null;
    
    // Remove selection from grid
    const selected = pixelGrid.querySelector('.pixel-block.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
}

// Handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (selectedBlockPosition === null) {
        alert('Por favor selecciona un bloque.');
        return;
    }
    
    const formData = {
        position: selectedBlockPosition,
        advertiser: document.getElementById('advertiser').value,
        url: document.getElementById('url').value,
        color: document.getElementById('color').value,
        image: document.getElementById('image').value || null
    };
    
    // Show loading state
    const submitBtn = purchaseForm.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Procesando...';
    submitBtn.disabled = true;
    
    try {
        // Send purchase request
        const response = await fetch(`${API_BASE_URL}/api/blocks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Success
        alert('¡Compra realizada con éxito! Tu bloque ha sido registrado.');
        closePurchaseModal();
        
        // Refresh blocks
        fetchBlocks();
        
    } catch (error) {
        console.error('Error submitting purchase:', error);
        alert('Error al procesar la compra. Por favor, intenta más tarde.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Show tooltip on hover
function showTooltip(e, position) {
    const block = e.target;
    const isOccupied = block.classList.contains('occupied');
    
    let content = `<strong>Bloque #${position}</strong>`;
    
    if (isOccupied) {
        try {
            const blockData = JSON.parse(block.dataset.blockData || '{}');
            content += `<br>Anunciante: ${blockData.advertiser || 'N/A'}`;
            if (blockData.url) {
                content += `<br>URL: ${blockData.url}`;
            }
        } catch (err) {
            content += `<br>Ocupado`;
        }
    } else {
        content += `<br>Disponible - $${BLOCK_PRICE} USD`;
    }
    
    blockTooltip.innerHTML = content;
    blockTooltip.style.display = 'block';
    
    // Position tooltip
    const rect = block.getBoundingClientRect();
    const tooltipRect = blockTooltip.getBoundingClientRect();
    
    let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    let top = rect.top - tooltipRect.height - 10;
    
    // Adjust if off screen
    if (left < 10) left = 10;
    if (top < 10) top = rect.bottom + 10;
    
    blockTooltip.style.left = `${left}px`;
    blockTooltip.style.top = `${top}px`;
}

// Hide tooltip
function hideTooltip() {
    blockTooltip.style.display = 'none';
}

// Show error message
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const gridSection = document.querySelector('.grid-section');
    gridSection.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Setup event listeners
function setupEventListeners() {
    // Close modal events
    closeModal.addEventListener('click', closePurchaseModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === purchaseModal) {
            closePurchaseModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && purchaseModal.style.display === 'block') {
            closePurchaseModal();
        }
    });
    
    // Form submission
    purchaseForm.addEventListener('submit', handleFormSubmit);
}
