import { useNavigate } from 'react-router';
import error from '../assets/App-Error.png'

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className="max-w-355 mx-auto">
            <img className='mt-20 m-auto' src={error} alt="" />
            <h1 className='font-bold text-center text-5xl'>
                OOPS!! APP NOT FOUND
            </h1>
            <p className='text-center text-gray-600 my-2'>
                The App you are requesting is not found on our system.  please try another apps
            </p>
            <button
                onClick={() => navigate(-1)}
             className="flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-2 px-6 rounded-md text-white m-auto font-semibold">
                Go Back
            </button>
        </div>
    );
};

export default Error;