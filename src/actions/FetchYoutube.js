export const fetchData = async (link) => {

    try {


      const response = await fetch('/api_yt.php', {
          method: 'POST',
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `city=${link}`
      })

      const data = await response.text()

      return {
          q720: data.split('<table cellspacing="0" cellpaddinig="0" border="0" class="downloadsTable">')[1].split('<tbody>')[1].split('href="')[1].split('"')[0],
          q360: data.split('<table cellspacing="0" cellpaddinig="0" border="0" class="downloadsTable">')[1].split('<tbody>')[1].split('href="').pop().split('"')[0]
      }

    } catch (error) {
      console.log(error)
     return link;
    }


 }
