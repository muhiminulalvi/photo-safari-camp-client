import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="flex flex-col-reverse items-center justify-center w-3/4 mx-auto">
          <div className='text-center'>
            <h2 className='text-5xl text-secondary font-bold py-5'>Looks Like You are in the wrong location</h2>
            <Link
              to="/"
              className="btn btn-secondary text-primary font-bold"
            >
              Back to homepage
            </Link>
          </div>
        <div className="flex flex-col items-center">

          <img src='https://i.ibb.co/gDstqzZ/d9953d54-1ec1-4492-9f33-b03a42f656bb.png' alt="" width={400} />

        </div>
      </section>
    );
};

export default ErrorPage;