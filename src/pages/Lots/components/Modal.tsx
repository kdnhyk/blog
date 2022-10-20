import styled from "styled-components";
import { IsCard } from "../store";

const ModalBlock = styled.div`
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    animation: modal-bg-show 0.3s;
    .modal-section {
      position: relative;
      z-index: 100;
      width: 12.5em;
      height: fit-content;
      max-height: 80vh;
      margin: 0 auto;
      border-radius: 0.25rem;
      background: $bg;
      color: $col;
      border: 1px solid $col;
      animation: modal-show 0.3s;

      overflow: auto;
      header {
        width: 100%;
        height: fit-content;
        padding: 0.25rem;
        border-bottom: 1px solid $col;
        box-sizing: border-box;
        position: relative;
        .modal-button {
          height: 1rem;
          font-size: 1rem;
          background: transparent;
          color: $col;
          position: absolute;
          top: 0;
          right: 0;
          &:hover {
            color: lighten($col, 10%);
          }
          &:toactivatecard {
            color: lighten($col, 15%);
          }
        }
      }
      main {
        padding: 0.25rem;
      }
    }
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lotsCards: IsCard[];
}

function Modal({ isOpen, onClose, lotsCards }: ModalProps) {
  return (
    <>
      {isOpen && (
        <ModalBlock>
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
        </ModalBlock>
      )}
    </>
  );
}

export default Modal;
