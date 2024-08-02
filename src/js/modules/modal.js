import { modalElements } from '../base';

export function initializeModal() {
    const { 
        openModalButton, 
        closeModalButton, 
        modalOverlay, 
        modal, 
        modalContent, 
        modalLoading, 
        modalTravelGuide, 
        planNowButton,
        modalTitle
    } = modalElements;

    const toggleModalVisibility = (isVisible) => {
        const displayValue = isVisible ? 'block' : 'none';
        modal.style.display = displayValue;
        modalOverlay.style.display = displayValue;
    };

    const updateModalTitle = (title) => {
        const titleElement = document.getElementById('modalTitle');
        if (titleElement) {
            titleElement.textContent = title;
        }
    };

    openModalButton.addEventListener('click', () => toggleModalVisibility(true));
    closeModalButton.addEventListener('click', () => toggleModalVisibility(false));
    modalOverlay.addEventListener('click', () => toggleModalVisibility(false));

    planNowButton.addEventListener('click', () => {
        modalContent.style.display = 'none';
        modalLoading.style.display = 'block';

        setTimeout(() => {
            modalLoading.style.display = 'none';
            modalTravelGuide.style.display = 'block';
            updateModalTitle('Travel Guide');
        }, 5000);
    });

    document.querySelectorAll('.modal__option').forEach(option => {
        option.addEventListener('click', (event) => {
            document.querySelectorAll('.modal__option').forEach(opt => opt.classList.remove('selected'));
            event.currentTarget.classList.add('selected');
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeModal);