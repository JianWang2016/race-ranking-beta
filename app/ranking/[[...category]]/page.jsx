import { AgeLinks } from "@/components/NavLinks";

function Category({ params }) {
  let gender = "both";
  let ageGroup = "all";

  let paramLen = params.category ? params.category.length : 0;

  if (paramLen == 1) {
    gender = params.category;
  } else if (paramLen == 2) {
    gender = params.category[0];
    ageGroup = params.category[1];
  }

  return (
    <>
      <div>
        {gender === "both" && (
          <div>
            <h1>All ranking</h1>
            <h2>
              gender: {gender} ageGroup: {ageGroup}{" "}
            </h2>
          </div>
        )}

        {gender != "both" && (
          <div>
            <div className="justify-left ml-4 mt-0 flex w-full md:w-auto">
              <nav className="flex gap-4">
                <AgeLinks gender={gender}/>
              </nav>
            </div>

            <h1>{gender} ranking</h1>
            <h2>
              gender: {gender} ageGroup: {ageGroup}{" "}
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Category;
