import { IsCard } from "../store";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lotsCards: IsCard[];
}

function Modal({ isOpen, onClose, lotsCards }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <section className="modal-section">
            <header>
              <h4>랜덤 뽑기</h4>
              <button className="modal-button" onClick={onClose}>
                x
              </button>
            </header>
            <main>
              <p>당첨자는</p>
              {lotsCards.map((card) => (
                <p key={card.id}>- {card.name}</p>
              ))}
              <p>입니다!</p>
            </main>
          </section>
        </div>
      )}
    </>
  );
}

export default Modal;
