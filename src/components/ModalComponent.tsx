import { MENU } from "../constants";
import { RenderMenu } from "./menu/ModalMenu";

export const MODAL_ID = "modal-container-master";
export const MODAL_ID_BUTTON = "modal-button";

export function ModalComponent() {
  return (
    <>
      <dialog id={MODAL_ID} class="mobile-menu">
        <RenderMenu menu={MENU} />
      </dialog>
      <script>
        {`
        document.getElementById("${MODAL_ID_BUTTON}")
          .addEventListener("click", function() {
            document.getElementById("${MODAL_ID}").show();
          })
        `}
      </script>
    </>
  );
}
