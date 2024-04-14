/* eslint-disable react/prop-types */

function MainContent({ children }) {
  return (
    <div>
      <main className="main">{children}</main>
    </div>
  );
}

export default MainContent;
