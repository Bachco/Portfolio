const Layout = ({children}) => {
  return <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} 
  font-sora relative`}>
    {children}
  </div>;
};

export default Layout;
