export const fetchData = async () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer DSrwd6rHgNLGyJ53HNDV0fBS4l8Cp9fqdFNvbER0DOM"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    "https://cdn.contentful.com/spaces/8p2ybppi9l5f/entries",
    requestOptions
  );

  const result = await response.json();

  return formatData(result);
};

const formatData = (response) => {
  const result = {
    trainers: [],
    camp: [],
    tournament: [],
    gallery: [],
  };

  response.items.forEach((data) => {
    if (data.sys.contentType.sys.id === "trainer") {
      result.trainers.push({
        ...data.fields,
      });
    } else if (data.sys.contentType.sys.id === "others") {
      result["siteConfig"] = data.fields;
    } else {
      result[data.sys.contentType.sys.id].unshift(data.fields.link);
    }
  });

  return result;
};
