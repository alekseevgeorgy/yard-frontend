import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Card from './Card';
import Hero from './Hero';
import Headline from './Headline';

export default () =>
  (<div>
    <Hero />
    <Headline />
    <Grid>
      <Card id={1} location="SOUTH BEACH, SAN FRANCISCO" name="764 Metropolitan Avenue">
        <p>
          The Lewis Steel Building is a masterful industrial conversion
          located
          in the heart of Williamsburg. Located at 76 North 4th Street, the
          former 1930&apos;s steel factory has been transformed into 83
          individually
          unique and luxury loft apartments.
        </p>
      </Card>
      <Card id={2} location="MIDTOWN EAST, MANHATTAN" name="100 East 53rd Street">
        <p>
          One Hundred East Fifty Third Street by Foster + Partners is a
          limited collection of modern residences in Midtown Manhattan&apos;s
          Cultural District. The 94 residences ranging from alcove lofts to
          four bedrooms within the 63-story tower are generously proportioned.
        </p>
      </Card>
      <Card id={3} location="NOLITA, MANHATTAN" name="152 Elizabeth">
        <p>
          152 Elizabeth is an ultra-luxury condominium building—the first in
          New York City designed by Japanese master architect Tadao Ando.
          Located at the corner of Kenmare and Elizabeth Streets in Nolita,
          the 32,000-square-foot building will stand as a profound
          architectural statement and embrace the industrial character of the
          neighborhood.
        </p>
      </Card>
    </Grid>
  </div>);
