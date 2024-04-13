function BodyContainer(props) {
  return (
    <div className="w-full md:w-11/12 lg:11/12 xl:w-10/12 m-auto ">
      {props.children}
    </div>
  );
}

export default BodyContainer;
