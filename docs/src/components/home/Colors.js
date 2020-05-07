import React from "react";

export default function Colors() {
  return (
    <div class="container text-center mx-auto mt-5 pt-5 mb-3">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <h2 class="pb-3">Organize Your Colors with Collections</h2>
          <p class="pb-3">
            Collections are groups of colors. You can create as many collections
            as you need to keep your colors organized.{" "}
          </p>
        </div>
        <div class="col-sm-2"></div>
      </div>

      <div class="row mt-3 w-75 mx-auto">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <img id="collections-image" src="/images/collections.svg" alt="" />
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  );
}
