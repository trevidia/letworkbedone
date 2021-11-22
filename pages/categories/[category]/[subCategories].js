import {useRouter} from "next/router";

const SubCategories = () => {
    const router = useRouter();
  return (
      <>
          <div>
              {router.query.subCategories}
          </div>
      </>
  );
}

export default SubCategories;
