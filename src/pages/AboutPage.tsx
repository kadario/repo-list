//**Libs  */
import { faHome } from "@fortawesome/free-solid-svg-icons";

//**Components */
import Breadcrumbs from "@components/breadcrumbs/Breadcrumbs";

const AboutPage = () => {
  return (
    <div className="my-8 w-full">
      <Breadcrumbs
        items={[
          { label: faHome, path: "/" },
          { label: "About", path: "/about" },
        ]}
      />
      <h1 className="text-5xl font-bold mb-4 text-gray-900">About Page</h1>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
        luctus, metus
      </p>
    </div>
  );
};

export default AboutPage;
