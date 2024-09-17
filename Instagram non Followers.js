async function getInstagramNonFollowers() {
  const csrftoken = getCookie("csrftoken");
  const ds_user_id = getCookie("ds_user_id");
  let initialUrl = `https://www.instagram.com/graphql/query/?query_hash=3dec7e2c57367ef3da3d987d89f9dbc8&variables={"id":"${ds_user_id}","include_reel":"true","fetch_mutual":"false","first":"24"}`;
  const nonFollowers = [];
  let hasNextPage = true;
  let endCursor = "";

  while (hasNextPage) {
    try {
      const response = await fetch(initialUrl);
      const data = await response.json();
      const edges = data.data.user.edge_follow.edges;
      const nonFollowerEdges = edges.filter(edge => !edge.node.follows_viewer);
      nonFollowers.push(...nonFollowerEdges.map(edge => edge.node.username.replace(/^@/, "")));

      hasNextPage = data.data.user.edge_follow.page_info.has_next_page;
      endCursor = data.data.user.edge_follow.page_info.end_cursor;
      initialUrl = `https://www.instagram.com/graphql/query/?query_hash=3dec7e2c57367ef3da3d987d89f9dbc8&variables={"id":"${ds_user_id}","include_reel":"true","fetch_mutual":"false","first":"24","after":"${endCursor}"}`;

      console.log(`%c Progress ${nonFollowers.length}/${data.data.user.edge_follow.count} (${parseInt(100 * (nonFollowers.length / data.data.user.edge_follow.count))}%)`, "background: #424254; color: #34c759;font-size: 35px;");
      console.log("%c This users don't follow you (Still in progress)", "background: #424254; color: #20A2FA;font-size: 13px;");
      nonFollowers.forEach(user => console.log(user));

      await sleep(Math.floor(400 * Math.random()) + 1000);
    } catch (error) {
      console.error(error);
      await sleep(10000);
    }
  }

  console.clear();
  console.log("%c Follow me on github https://github.com/estebanx8", "background: #424254; color: #20A2FA;font-size: 18px;");
  console.log("%c All DONE!", "background: #424254; color: #34c759;font-size: 25px;");
  console.log(`%c Users that don't follow you:`, "background: #424254; color: #20A2FA;font-size: 18px;");
  console.log(nonFollowers.join("\n"));

  const text = nonFollowers.join("\n");
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "usersNotFollowingBack.txt";
  a.click();
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

getInstagramNonFollowers();