import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";

const items = [
  {
    id: 1,
    term: "Accessibility",
    description: "Accessibility is used to provide accessibility",
  },
  {
    id: 2,
    term: "Fragment",
    description:
      "Fragment is used to bind all the html elments, group together",
  },
  {
    id: 3,
    term: "aria-*",
    description:
      "Note that all aria-* HTML attributes are fully supported in JSX.",
  },
];

function ListItem(item: any) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

const Accessibility = () => {
  return (
    <>
      <Typography variant="h3">Accessibility</Typography>
      <Typography
        variant="h6"
        color={"white"}
        sx={{
          background: "linear-gradient(#e66465, #9198e5);",
        }}
      >
        Web accessibility (also referred to as a11y) is the design and creation
        of websites that can be used by everyone. Accessibility support is
        necessary to allow assistive technology to interpret web pages. React
        fully supports building accessible websites, often by using standard
        HTML techniques.
      </Typography>
      <Typography variant="h6" bgcolor={"black"} color="white">
        Note that all aria-* HTML attributes are fully supported in JSX. Whereas
        most DOM properties and attributes in React are camelCased, these
        attributes should be hyphen-cased (also known as kebab-case, lisp-case,
        etc) as they are in plain HTML:
      </Typography>{" "}
      <br />
      <Typography variant="h2">React Fragment</Typography> <br />
      <br />
      <dl>
        {items.map(
          (item) =>
            // <ListItem item={item} key={item.id} />
            ListItem(item)
          //   ListItem(item)
        )}
      </dl>
      <hr />
      <dl>
        {items.map(
          (item) => (
            <Fragment key={item.id}>
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </Fragment>
          )
          //   ListItem(item)
        )}
      </dl>
      <hr />
      <dl>
        {items.map(
          (item) => (
            <>
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </>
          )
          //   ListItem(item)
        )}
      </dl>
      <br />
      <hr />
      <label htmlFor="namedInput">Name:</label>
      <input id="namedInput" type="text" name="name" />
    </>
  );
};

export default Accessibility;
