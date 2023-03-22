import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="py-3"></footer>
      <footer className="py-3"></footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div class="col-12">
              <p className="text-center">&copy {new Date().getFullYear(); Power by SoftDev}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
