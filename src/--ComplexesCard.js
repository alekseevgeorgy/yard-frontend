import React from 'react';

export default () => {
  return (
    <div class="complexes-cards">
      <div class="container">
        <a class="complexes-card" href="#">
          <img class="complexes-card-photo" src="img/bitmap1.png" alt="card-photo" />
          <div class="complexes-card-content">
            <p class="complexes-card-location">SOUTH BEACH, SAN FRANCISCO</p>
            <h3 class="complexes-card-address">764 Metropolitan Avenue</h3>
            <p class="complexes-card-description">The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments.</p>
          </div>
        </a>
        <a class="complexes-card" href="#">
          <img class="complexes-card-photo" src="img/bitmap2.png" alt="card-photo" />
          <div class="complexes-card-content">
            <p class="complexes-card-location">MIDTOWN EAST, MANHATTAN</p>
            <h3 class="complexes-card-address">100 East 53rd Street</h3>
            <p class="complexes-card-description">One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</p>
          </div>
        </a>
        <a class="complexes-card" href="#">
          <img class="complexes-card-photo" src="img/bitmap3.png" alt="card-photo" />
          <div class="complexes-card-content">
            <p class="complexes-card-location">NOLITA, MANHATTAN</p>
            <h3 class="complexes-card-address">152 Elizabeth</h3>
            <p class="complexes-card-description">152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.</p>
          </div>
        </a>
      </div>
    </div>
  );
};
