// import { getIsModalOpen, getModalMeta } from 'store/selectors'
// import { closeModal } from 'store/Modals/actions'

const modalId = "modal-container-master";

type Props = {
  children?: JSX.Element;
};

export function ModalComponent({ children }: Props) {
  const isOpen = false;
  const classNames = "";
  // const isOpen = useSelector(getIsModalOpen)
  // const meta = useSelector(getModalMeta)
  // const { classNames, children } = meta;
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   let focusElems: HTMLElement[] = []
  //   const modal = document.getElementById(modalId) as HTMLElement
  //
  //   const handleFocus = (e: KeyboardEvent) => {
  //     const target = e.target as Node
  //
  //     switch (e.key) {
  //       case 'Escape':
  //         dispatch(closeModal())
  //         break
  //       case 'Tab':
  //         if (!modal.contains(target)) {
  //           if (e.shiftKey) {
  //             focusElems[focusElems.length - 1].focus()
  //           } else {
  //             focusElems[0].focus()
  //           }
  //         }
  //         break
  //       default:
  //         break
  //     }
  //   }
  //
  //   if (isOpen) {
  //     document.body.style.overflow = 'hidden'
  //     window.addEventListener('keydown', handleFocus)
  //
  //     focusElems = Array.from(
  //       modal.querySelectorAll(
  //         'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  //       )
  //     )
  //   } else {
  //     document.body.style.overflow = 'initial'
  //     window.removeEventListener('keydown', handleFocus)
  //   }
  //
  //   return () => {
  //     window.removeEventListener('keydown', handleFocus)
  //   }
  // }, [isOpen, dispatch])

  return (
    <div
      id={modalId}
      aria-hidden={!isOpen}
      class={`posf t-0 r-0 b-0 l-0 z2 ${!isOpen ? "dn" : ""}`}
    >
      <div
        class={`posr h-100 w-100 of-ys ${classNames}`}
        style="background-color:rgba(0, 0, 0, 0.4)"
      >
        {children}
      </div>
    </div>
  );
}
