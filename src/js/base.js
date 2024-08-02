export const modalElements = {
  openModalButton: document.getElementById('openModal'),
  closeModalButton: document.getElementById('closeModal'),
  modalOverlay: document.getElementById('modalOverlay'),
  modal: document.getElementById('modal'),
  modalContent: document.getElementById('modalContent'),
  modalTitle: document.getElementById('modalTitle'),
  modalLoading: document.getElementById('modalLoading'),
  modalTravelGuide: document.getElementById('modalTravelGuide'),
  planNowButton: document.getElementById('planNow')
};

export function initializeBase() {
}

document.addEventListener('DOMContentLoaded', function () {
  initializeBase();
});
