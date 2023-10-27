import Link from "next/link";
import { FunctionComponent } from "react";

type NotFoundProps = {};

const NotFound: FunctionComponent<NotFoundProps> = () => {
  return (
    <div className="top-0 left-0 w-full h-full overflow-y-auto flex flex-col justify-center items-center gap-5 fixed z-50 bg-white">
      <div className="col-sm-10 text-center">
        <div className="four_zero_four_bg">
          <h1 className="text-center text-heading2-bold text-green-700">404</h1>
        </div>

        <div className="showImage"></div>

        <div className="contant_box_404">
          <h3 className="h2 text-heading2-bold text-green-700">{`Looks like you're lost`}</h3>
          <br></br>

          <p className="text-slate-900 text-[20px]">
            {"Page you are looking for is not avaible!"}
          </p>

          <Link
            href={"/"}
            className="link_404 text-white text-body-semibold rounded-xl p-3 text-[18px] hover:scale-110 hover:underline"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
