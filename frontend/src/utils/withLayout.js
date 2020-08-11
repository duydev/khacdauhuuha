const withLayout = (
  LayoutComponent,
  Component,
  { layoutProps, componentProps } = {}
) => props => (
  <LayoutComponent {...props} {...layoutProps}>
    <Component {...props} {...componentProps} />
  </LayoutComponent>
);

export default withLayout;
