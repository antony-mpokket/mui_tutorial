import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import StartIcon from "@mui/icons-material/Start";

const MuiBreadcrumbs = () => {
  return (
    <>
      <h4>
        Breadcrumbs consist of a list of links that help a user visualize a
        page's location within the hierarchical structure of a website, and
        allow navigation up to any of its "ancestors".
      </h4>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
          maxItems={2}
          itemsAfterCollapse={2}
          itemsBeforeCollapse={2}
        >
          <Link underline="hover" href="b-home">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Link underline="hover" href="#">
            Features
          </Link>
          <Link underline="hover" href="#">
            Price
          </Link>
          <Typography color="text.primary">shoes</Typography>
        </Breadcrumbs>
      </Box>
      <br />
      <br />
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<StartIcon fontSize="large" />}
          maxItems={2}
          itemsAfterCollapse={2}
          itemsBeforeCollapse={2}
        >
          <Link underline="hover" href="b-home">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Link underline="hover" href="#">
            Features
          </Link>
          <Link underline="hover" href="#">
            Price
          </Link>
          <Typography color="text.primary">shoes</Typography>
        </Breadcrumbs>
      </Box>
    </>
  );
};

export default MuiBreadcrumbs;
