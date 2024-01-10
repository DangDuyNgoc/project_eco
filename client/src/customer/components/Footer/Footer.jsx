import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid className="bg-black text-white text-center mt-10 py-3" container>
        <Grid items xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
