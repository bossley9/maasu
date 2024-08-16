import { BaseLayout } from "../layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout>
      <div class="container my9">
        <h2 class="title2 tc">404</h2>
        <p class="tc">
          Oops, we can't seem to find the page you're looking for.
        </p>
        <button
          // onClick={() => window.history.back()}
          class="clearall tdu hov-c-primary-main"
        >
          Go Back
        </button>
      </div>
    </BaseLayout>
  );
}
