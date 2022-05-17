import Button from "@material-ui/core/Button";

export const ThirdButton = (props) => {
  const { children } = props;
  return (
    <>
      <Button variant="contained" color="primary">
        {children}
      </Button>
    </>
  );
};
