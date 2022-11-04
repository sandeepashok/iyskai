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
  };

  response.items.forEach((data) => {
    if (data.sys.contentType.sys.id === "siteConfig") {
      result["siteConfig"] = data.fields;
    } else {
      result.trainers.push({
        ...data.fields,
        content: data.fields.trainerContent.content[0].content[0].value,
      });
    }
  });

  return result;
};
