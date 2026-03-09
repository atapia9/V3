// Configuration
const API_BASE_URL = 'https://daae643f-cc64-4281-9aa9-4720a70a1e76.builder.kiloapps.io';
const TOTAL_BLOCKS = 8160; // 1024x800 / 100 = 8160 blocks (10x10 pixels each)
const BLOCK_PRICE = 100; // USD

// Translations object
const translations = {
    es: {
        logo: 'Mosaico Digital Acambaro',
        tagline: 'Tu espacio publicitario en el corazón de Acámbaro',
        lightMode: 'Modo Claro',
        darkMode: 'Modo Oscuro',
        pixelMosaic: 'Mosaico de Pixels',
        gridInfo: '1024×800 px | 8,160 bloques disponibles | $100 USD por bloque',
        gridClick: 'Haz clic en un bloque para comprarlo',
        available: 'Disponible',
        occupied: 'Ocupado',
        selected: 'Seleccionado',
        howItWorks: '¿Cómo funciona?',
        step1: 'Selecciona un bloque disponible en el mosaico',
        step2: 'Elige un color o imagen para tu publicidad',
        step3: 'Proporciona tu URL y nombre de negocio',
        step4: '¡Tu publicidad estará visible las 24 horas!',
        pricing: 'Precios',
        priceDescription: 'Por cada bloque de 10×10 pixels',
        feature1: '✓ Visibilidad permanente',
        feature2: '✓ Enlace a tu sitio web',
        feature3: '✓ Tu marca o imagen',
        feature4: '✓ Exposición local y global',
        mosaicStatus: 'Estado del Mosaico',
        totalBlocks: 'Total de Bloques',
        occupiedBlocks: 'Bloques Ocupados',
        availableBlocks: 'Bloques Disponibles',
        buyBlock: 'Comprar Bloque',
        selectedBlock: 'Bloque seleccionado',
        advertiserLabel: 'Nombre del anunciante / Negocio:',
        advertiserPlaceholder: 'Ej: Restaurant La Casa',
        urlLabel: 'URL de tu sitio web:',
        urlPlaceholder: 'https://tunegocio.com',
        colorLabel: 'Color de tu bloque:',
        imageLabel: 'URL de imagen (opcional):',
        imagePlaceholder: 'https://tunegocio.com/imagen.jpg',
        price: 'Precio',
        confirmPurchase: 'Confirmar Compra',
        footerText: 'Mosaico Digital Acambaro. Todos los derechos reservados.',
        debugMode: 'Debug Grid',
        selectBlock: 'Por favor selecciona un bloque.',
        processing: 'Procesando...',
        purchaseSuccess: '¡Compra realizada con éxito! Tu bloque ha sido registrado.',
        purchaseError: 'Error al procesar la compra. Por favor, intenta más tarde.',
        blockOccupied: 'Este bloque ya está ocupado:',
        blockAvailable: 'Disponible',
        na: 'N/A',
        loadError: 'No se pudieron cargar los bloques. Por favor, intenta más tarde.'
    },
    en: {
        logo: 'Digital Mosaic Acambaro',
        tagline: 'Your advertising space in the heart of Acámbaro',
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        pixelMosaic: 'Pixel Mosaic',
        gridInfo: '1024×800 px | 8,160 blocks available | $100 USD per block',
        gridClick: 'Click on a block to purchase it',
        available: 'Available',
        occupied: 'Occupied',
        selected: 'Selected',
        howItWorks: 'How it works?',
        step1: 'Select an available block on the mosaic',
        step2: 'Choose a color or image for your advertisement',
        step3: 'Provide your URL and business name',
        step4: 'Your advertisement will be visible 24 hours!',
        pricing: 'Pricing',
        priceDescription: 'For each 10×10 pixel block',
        feature1: '✓ Permanent visibility',
        feature2: '✓ Link to your website',
        feature3: '✓ Your brand or image',
        feature4: '✓ Local and global exposure',
        mosaicStatus: 'Mosaic Status',
        totalBlocks: 'Total Blocks',
        occupiedBlocks: 'Occupied Blocks',
        availableBlocks: 'Available Blocks',
        buyBlock: 'Buy Block',
        selectedBlock: 'Selected block',
        advertiserLabel: 'Advertiser / Business Name:',
        advertiserPlaceholder: 'e.g., Restaurant La Casa',
        urlLabel: 'Your website URL:',
        urlPlaceholder: 'https://yourbusiness.com',
        colorLabel: 'Your block color:',
        imageLabel: 'Image URL (optional):',
        imagePlaceholder: 'https://yourbusiness.com/image.jpg',
        price: 'Price',
        confirmPurchase: 'Confirm Purchase',
        footerText: 'Digital Mosaic Acambaro. All rights reserved.',
        debugMode: 'Debug Grid',
        selectBlock: 'Please select a block.',
        processing: 'Processing...',
        purchaseSuccess: 'Purchase successful! Your block has been registered.',
        purchaseError: 'Error processing purchase. Please try again later.',
        blockOccupied: 'This block is already occupied:',
        blockAvailable: 'Available',
        na: 'N/A',
        loadError: 'Could not load blocks. Please try again later.'
    },
    fr: {
        logo: 'Mosaïque Digitale Acambaro',
        tagline: 'Votre espace publicitaire au cœur d\'Acámbaro',
        lightMode: 'Mode Clair',
        darkMode: 'Mode Sombre',
        pixelMosaic: 'Mosaïque de Pixels',
        gridInfo: '1024×800 px | 8 160 blocs disponibles | 100 USD par bloc',
        gridClick: 'Cliquez sur un bloc pour l\'acheter',
        available: 'Disponible',
        occupied: 'Occupé',
        selected: 'Sélectionné',
        howItWorks: 'Comment ça marche?',
        step1: 'Sélectionnez un bloc disponible sur la mosaïque',
        step2: 'Choisissez une couleur ou une image pour votre publicité',
        step3: 'Fournissez votre URL et le nom de votre entreprise',
        step4: 'Votre publicité sera visible 24 heures sur 24!',
        pricing: 'Tarification',
        priceDescription: 'Pour chaque bloc de 10×10 pixels',
        feature1: '✓ Visibilité permanente',
        feature2: '✓ Lien vers votre site web',
        feature3: '✓ Votre marque ou image',
        feature4: '✓ Exposition locale et mondiale',
        mosaicStatus: 'État de la Mosaïque',
        totalBlocks: 'Total des Blocs',
        occupiedBlocks: 'Blocs Occupés',
        availableBlocks: 'Blocs Disponibles',
        buyBlock: 'Acheter un Bloc',
        selectedBlock: 'Bloc sélectionné',
        advertiserLabel: 'Nom de l\'annonceur / Entreprise:',
        advertiserPlaceholder: 'Ex: Restaurant La Casa',
        urlLabel: 'URL de votre site web:',
        urlPlaceholder: 'https://votreentreprise.com',
        colorLabel: 'Couleur de votre bloc:',
        imageLabel: 'URL de l\'image (optionnel):',
        imagePlaceholder: 'https://votreentreprise.com/image.jpg',
        price: 'Prix',
        confirmPurchase: 'Confirmer l\'Achat',
        footerText: 'Mosaïque Digitale Acambaro. Tous droits réservés.',
        debugMode: 'Grille Debug',
        selectBlock: 'Veuillez sélectionner un bloc.',
        processing: 'Traitement...',
        purchaseSuccess: 'Achat réussi! Votre bloc a été enregistré.',
        purchaseError: 'Erreur lors du traitement. Veuillez réessayer plus tard.',
        blockOccupied: 'Ce bloc est déjà occupé:',
        blockAvailable: 'Disponible',
        na: 'N/D',
        loadError: 'Impossible de charger les blocs. Veuillez réessayer plus tard.'
    },
    pt: {
        logo: 'Mosaico Digital Acambaro',
        tagline: 'Seu espaço publicitário no coração de Acámbaro',
        lightMode: 'Modo Claro',
        darkMode: 'Modo Escuro',
        pixelMosaic: 'Mosaico de Pixels',
        gridInfo: '1024×800 px | 8.160 blocos disponíveis | $100 USD por bloco',
        gridClick: 'Clique em um bloco para comprá-lo',
        available: 'Disponível',
        occupied: 'Ocupado',
        selected: 'Selecionado',
        howItWorks: 'Como funciona?',
        step1: 'Selecione um bloco disponível no mosaico',
        step2: 'Escolha uma cor ou imagem para sua publicidade',
        step3: 'Forneça sua URL e nome da empresa',
        step4: 'Sua publicidade estará visível 24 horas!',
        pricing: 'Preços',
        priceDescription: 'Para cada bloco de 10×10 pixels',
        feature1: '✓ Visibilidade permanente',
        feature2: '✓ Link para seu site',
        feature3: '✓ Sua marca ou imagem',
        feature4: '✓ Exposição local e global',
        mosaicStatus: 'Status do Mosaico',
        totalBlocks: 'Total de Blocos',
        occupiedBlocks: 'Blocos Ocupados',
        availableBlocks: 'Blocos Disponíveis',
        buyBlock: 'Comprar Bloco',
        selectedBlock: 'Bloco selecionado',
        advertiserLabel: 'Nome do anunciante / Empresa:',
        advertiserPlaceholder: 'Ex: Restaurante La Casa',
        urlLabel: 'URL do seu site:',
        urlPlaceholder: 'https://suaempresa.com',
        colorLabel: 'Cor do seu bloco:',
        imageLabel: 'URL da imagem (opcional):',
        imagePlaceholder: 'https://suaempresa.com/imagem.jpg',
        price: 'Preço',
        confirmPurchase: 'Confirmar Compra',
        footerText: 'Mosaico Digital Acambaro. Todos os direitos reservados.',
        debugMode: 'Grade Debug',
        selectBlock: 'Por favor, selecione um bloco.',
        processing: 'Processando...',
        purchaseSuccess: 'Compra realizada com sucesso! Seu bloco foi registrado.',
        purchaseError: 'Erro ao processar a compra. Por favor, tente novamente mais tarde.',
        blockOccupied: 'Este bloco já está ocupado:',
        blockAvailable: 'Disponível',
        na: 'N/D',
        loadError: 'Não foi possível carregar os blocos. Por favor, tente novamente mais tarde.'
    }
};

// Current language and theme
let currentLanguage = localStorage.getItem('language') || 'es';
let isDarkMode = localStorage.getItem('darkMode') === 'true';

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
const languageSelect = document.getElementById('language-select');
const darkModeBtn = document.getElementById('dark-mode-btn');
const debugToggle = document.getElementById('debug-toggle');
const debugOverlay = document.getElementById('debug-overlay');

// Debug grid state
let isDebugMode = false;

// State
let purchasedBlocks = [];
let selectedBlockPosition = null;

// Get translation function
function t(key) {
    return translations[currentLanguage][key] || translations['es'][key] || key;
}

// Update all translations on the page
function updateTranslations() {
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = t(key);
    });
    
    // Update all elements with data-translate-title attribute
    document.querySelectorAll('[data-translate-title]').forEach(el => {
        const key = el.getAttribute('data-translate-title');
        el.title = t(key);
    });
    
    // Update all elements with data-translate-placeholder attribute
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        el.placeholder = t(key);
    });
    
    // Update language selector
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    // Update dark mode button text
    updateDarkModeButton();
    
    // Setup debug toggle
    setupDebugToggle();
}

// Setup debug toggle functionality
function setupDebugToggle() {
    if (debugToggle) {
        debugToggle.addEventListener('click', toggleDebugGrid);
    }
}

// Toggle debug grid overlay
function toggleDebugGrid() {
    isDebugMode = !isDebugMode;
    
    if (isDebugMode) {
        debugOverlay.classList.add('active');
        debugToggle.classList.add('active');
        renderDebugGrid();
    } else {
        debugOverlay.classList.remove('active');
        debugToggle.classList.remove('active');
    }
}

// Render debug grid lines
function renderDebugGrid() {
    debugOverlay.innerHTML = '';
    
    const gridWidth = 1020; // 102 columns * 10px
    const gridHeight = 800; // 80 rows * 10px
    
    debugOverlay.style.width = gridWidth + 'px';
    debugOverlay.style.height = gridHeight + 'px';
    
    // Create vertical grid lines (columns)
    for (let col = 0; col <= 102; col++) {
        const colLine = document.createElement('div');
        colLine.className = 'debug-col';
        if (col % 10 === 0) {
            colLine.classList.add('debug-major-col');
        }
        colLine.style.left = (col * 10) + 'px';
        debugOverlay.appendChild(colLine);
    }
    
    // Create horizontal grid lines (rows)
    for (let row = 0; row <= 80; row++) {
        const rowLine = document.createElement('div');
        rowLine.className = 'debug-row';
        if (row % 10 === 0) {
            rowLine.classList.add('debug-major-row');
        }
        rowLine.style.top = (row * 10) + 'px';
        debugOverlay.appendChild(rowLine);
    }
}

// Toggle dark mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    updateDarkModeButton();
}

// Update dark mode button
function updateDarkModeButton() {
    const themeIcon = darkModeBtn.querySelector('.theme-icon');
    const themeText = darkModeBtn.querySelector('.theme-text');
    
    if (isDarkMode) {
        themeIcon.textContent = '🌙';
        themeText.textContent = t('darkMode');
    } else {
        themeIcon.textContent = '☀️';
        themeText.textContent = t('lightMode');
    }
}

// Initialize theme
function initTheme() {
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    updateDarkModeButton();
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initGrid();
    fetchBlocks();
    setupEventListeners();
    initTheme();
    updateTranslations();
    setupLanguageAndThemeListeners();
});

// Setup language and theme event listeners
function setupLanguageAndThemeListeners() {
    // Language selector
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            localStorage.setItem('language', currentLanguage);
            updateTranslations();
            updateTooltipContent();
        });
    }
    
    // Dark mode toggle
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleDarkMode);
    }
}

// Update tooltip content based on current language
function updateTooltipContent() {
    // Force tooltip refresh if visible
    const blocks = pixelGrid.querySelectorAll('.pixel-block');
    blocks.forEach((block, index) => {
        if (block.classList.contains('occupied')) {
            block.removeEventListener('mouseenter', block._mouseenter);
            block._mouseenter = (e) => showTooltip(e, index);
            block.addEventListener('mouseenter', block._mouseenter);
        }
    });
}

// Initialize empty grid - optimized with DocumentFragment for better performance
function initGrid() {
    pixelGrid.innerHTML = '';
    
    // Use DocumentFragment for batch DOM insertion (performance optimization)
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < TOTAL_BLOCKS; i++) {
        const block = document.createElement('div');
        block.className = 'pixel-block available';
        block.dataset.position = i;
        
        // Add hover events using event delegation (performance optimization)
        // Events are handled by the grid container, not individual blocks
        
        // Store index for event delegation
        block.dataset.index = i;
        
        fragment.appendChild(block);
    }
    
    // Single DOM insertion instead of 8,160 insertions
    pixelGrid.appendChild(fragment);
    
    // Set up event delegation for better performance
    setupEventDelegation();
}

// Event delegation for hover and click (performance optimization)
function setupEventDelegation() {
    pixelGrid.addEventListener('mouseover', (e) => {
        const block = e.target.closest('.pixel-block');
        if (block) {
            const index = parseInt(block.dataset.index, 10);
            showTooltip(e, index);
        }
    });
    
    pixelGrid.addEventListener('mouseout', (e) => {
        const block = e.target.closest('.pixel-block');
        if (block) {
            hideTooltip();
        }
    });
    
    pixelGrid.addEventListener('click', (e) => {
        const block = e.target.closest('.pixel-block');
        if (block) {
            const index = parseInt(block.dataset.index, 10);
            handleBlockClick(index);
        }
    });
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
        showError(t('loadError'));
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
            alert(`${t('blockOccupied')}\n\n${t('advertiserLabel').split(':')[0]}: ${blockData.advertiser || t('na')}\nURL: ${blockData.url || t('na')}`);
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
        alert(t('selectBlock'));
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
    const originalText = submitBtn.getAttribute('data-original-text') || submitBtn.textContent;
    if (!submitBtn.getAttribute('data-original-text')) {
        submitBtn.setAttribute('data-original-text', originalText);
    }
    submitBtn.textContent = t('processing');
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
        alert(t('purchaseSuccess'));
        closePurchaseModal();
        
        // Refresh blocks
        fetchBlocks();
        
    } catch (error) {
        console.error('Error submitting purchase:', error);
        alert(t('purchaseError'));
    } finally {
        submitBtn.textContent = t('confirmPurchase');
        submitBtn.disabled = false;
    }
}

// Show tooltip on hover
function showTooltip(e, position) {
    const block = e.target;
    const isOccupied = block.classList.contains('occupied');
    
    let content = `<strong>${t('selectedBlock')} #${position}</strong>`;
    
    if (isOccupied) {
        try {
            const blockData = JSON.parse(block.dataset.blockData || '{}');
            content += `<br>${t('advertiserLabel').split(':')[0]}: ${blockData.advertiser || t('na')}`;
            if (blockData.url) {
                content += `<br>URL: ${blockData.url}`;
            }
        } catch (err) {
            content += `<br>${t('occupied')}`;
        }
    } else {
        content += `<br>${t('blockAvailable')} - ${BLOCK_PRICE} USD`;
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
