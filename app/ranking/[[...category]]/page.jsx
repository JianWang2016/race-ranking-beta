function Category({ params }) {


  let gender = "both"
  let ageGroup = "all"
  
  let paramLen = params.category ? params.category.length : 0

 if (paramLen == 1) {
    gender = params.category
  } else if (paramLen == 2) {
    gender = params.category[0]
    ageGroup = params.category[1]

  }


  return (
    <>
      <h1>Dynamic page</h1>
      

      <h2>gender: {gender} ageGroup: {ageGroup} </h2>

    </>
  );
}

export default Category;
