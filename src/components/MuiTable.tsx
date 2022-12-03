import React from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";

const MuiTable = () => {
  return (
    <>
      <TableContainer component={Paper}  sx={{maxHeight:'500px'}}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>First NAme</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>IP Addres</TableCell>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    background: "linear-gradient(#e66465, #9198e5);",
                  }}
                >
                  {row.id}
                </TableCell>
                <TableCell
                  sx={{
                    background:
                      "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);",
                  }}
                >
                  {row.first_name}
                </TableCell>
                <TableCell
                  sx={{
                    background: "linear-gradient(#ff9900, #00ff00);",
                  }}
                >
                  {row.last_name}
                </TableCell>
                <TableCell sx={{
                  background: "linear-gradient(blue, red);"
                }}>{row.email}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.ip_address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Corella",
    last_name: "Haskell",
    email: "chaskell0@nba.com",
    gender: "Female",
    ip_address: "100.163.240.68",
  },
  {
    id: 2,
    first_name: "Thomasa",
    last_name: "Poynser",
    email: "tpoynser1@constantcontact.com",
    gender: "Female",
    ip_address: "190.28.66.1",
  },
  {
    id: 3,
    first_name: "Jesse",
    last_name: "Charpin",
    email: "jcharpin2@answers.com",
    gender: "Female",
    ip_address: "222.55.247.25",
  },
  {
    id: 4,
    first_name: "Court",
    last_name: "Oake",
    email: "coake3@bloglovin.com",
    gender: "Male",
    ip_address: "2.98.26.31",
  },
  {
    id: 5,
    first_name: "Freddie",
    last_name: "Gegg",
    email: "fgegg4@tripod.com",
    gender: "Female",
    ip_address: "113.120.87.229",
  },
  {
    id: 6,
    first_name: "Tarrah",
    last_name: "Prayer",
    email: "tprayer5@salon.com",
    gender: "Female",
    ip_address: "57.215.9.48",
  },
  {
    id: 7,
    first_name: "Mimi",
    last_name: "Erratt",
    email: "merratt6@privacy.gov.au",
    gender: "Female",
    ip_address: "70.22.156.252",
  },
  {
    id: 8,
    first_name: "Rollie",
    last_name: "Negus",
    email: "rnegus7@ning.com",
    gender: "Male",
    ip_address: "37.92.72.184",
  },
  {
    id: 9,
    first_name: "Dannie",
    last_name: "Cran",
    email: "dcran8@mlb.com",
    gender: "Male",
    ip_address: "112.73.236.8",
  },
  {
    id: 10,
    first_name: "Stanton",
    last_name: "Hamflett",
    email: "shamflett9@abc.net.au",
    gender: "Male",
    ip_address: "38.94.183.255",
  },
  {
    id: 11,
    first_name: "Mia",
    last_name: "Altamirano",
    email: "maltamiranoa@slate.com",
    gender: "Genderfluid",
    ip_address: "28.110.148.24",
  },
  {
    id: 12,
    first_name: "Calypso",
    last_name: "Trainor",
    email: "ctrainorb@disqus.com",
    gender: "Agender",
    ip_address: "146.10.58.99",
  },
  {
    id: 13,
    first_name: "Kalila",
    last_name: "Portigall",
    email: "kportigallc@tripod.com",
    gender: "Female",
    ip_address: "10.177.127.221",
  },
  {
    id: 14,
    first_name: "Carlina",
    last_name: "FitzAlan",
    email: "cfitzaland@npr.org",
    gender: "Female",
    ip_address: "106.73.168.232",
  },
  {
    id: 15,
    first_name: "Aymer",
    last_name: "Gaytor",
    email: "agaytore@psu.edu",
    gender: "Male",
    ip_address: "145.206.149.234",
  },
  {
    id: 16,
    first_name: "Derk",
    last_name: "Wetherald",
    email: "dwetheraldf@techcrunch.com",
    gender: "Male",
    ip_address: "11.27.239.254",
  },
  {
    id: 17,
    first_name: "Betty",
    last_name: "Duggon",
    email: "bduggong@freewebs.com",
    gender: "Female",
    ip_address: "172.104.165.14",
  },
  {
    id: 18,
    first_name: "Antonin",
    last_name: "Henstridge",
    email: "ahenstridgeh@businesswire.com",
    gender: "Male",
    ip_address: "21.147.70.47",
  },
  {
    id: 19,
    first_name: "Louis",
    last_name: "Martland",
    email: "lmartlandi@biglobe.ne.jp",
    gender: "Genderfluid",
    ip_address: "193.229.138.100",
  },
  {
    id: 20,
    first_name: "Dorothy",
    last_name: "Marushak",
    email: "dmarushakj@merriam-webster.com",
    gender: "Bigender",
    ip_address: "109.102.9.219",
  },
  {
    id: 21,
    first_name: "Mendy",
    last_name: "Maly",
    email: "mmalyk@wiley.com",
    gender: "Male",
    ip_address: "212.207.78.184",
  },
  {
    id: 22,
    first_name: "Cornelia",
    last_name: "Jouanot",
    email: "cjouanotl@elegantthemes.com",
    gender: "Female",
    ip_address: "244.103.62.29",
  },
  {
    id: 23,
    first_name: "Maegan",
    last_name: "Dibley",
    email: "mdibleym@pbs.org",
    gender: "Genderqueer",
    ip_address: "153.182.116.126",
  },
  {
    id: 24,
    first_name: "Dorette",
    last_name: "Gorger",
    email: "dgorgern@addthis.com",
    gender: "Female",
    ip_address: "117.194.228.192",
  },
  {
    id: 25,
    first_name: "Brannon",
    last_name: "Bottrill",
    email: "bbottrillo@xing.com",
    gender: "Agender",
    ip_address: "64.212.235.160",
  },
  {
    id: 26,
    first_name: "Herman",
    last_name: "Pizey",
    email: "hpizeyp@sun.com",
    gender: "Bigender",
    ip_address: "240.120.88.70",
  },
  {
    id: 27,
    first_name: "Orson",
    last_name: "Airs",
    email: "oairsq@ameblo.jp",
    gender: "Male",
    ip_address: "181.113.79.58",
  },
  {
    id: 28,
    first_name: "Malissia",
    last_name: "Kisbey",
    email: "mkisbeyr@desdev.cn",
    gender: "Non-binary",
    ip_address: "178.70.225.239",
  },
  {
    id: 29,
    first_name: "Jeanna",
    last_name: "Curgenuer",
    email: "jcurgenuers@buzzfeed.com",
    gender: "Female",
    ip_address: "1.28.253.78",
  },
  {
    id: 30,
    first_name: "Dore",
    last_name: "Rulf",
    email: "drulft@mapy.cz",
    gender: "Male",
    ip_address: "167.138.87.118",
  },
  {
    id: 31,
    first_name: "Salaidh",
    last_name: "Vernall",
    email: "svernallu@gizmodo.com",
    gender: "Female",
    ip_address: "9.133.34.64",
  },
  {
    id: 32,
    first_name: "Zonnya",
    last_name: "Kewley",
    email: "zkewleyv@phoca.cz",
    gender: "Female",
    ip_address: "151.105.138.37",
  },
  {
    id: 33,
    first_name: "Ronalda",
    last_name: "Freddi",
    email: "rfreddiw@php.net",
    gender: "Genderfluid",
    ip_address: "200.217.27.77",
  },
  {
    id: 34,
    first_name: "Dominga",
    last_name: "Mix",
    email: "dmixx@engadget.com",
    gender: "Female",
    ip_address: "137.246.4.10",
  },
  {
    id: 35,
    first_name: "Ceil",
    last_name: "O'Cannan",
    email: "cocannany@pagesperso-orange.fr",
    gender: "Female",
    ip_address: "15.219.182.136",
  },
  {
    id: 36,
    first_name: "Mortimer",
    last_name: "Pepineaux",
    email: "mpepineauxz@hao123.com",
    gender: "Male",
    ip_address: "17.233.23.183",
  },
  {
    id: 37,
    first_name: "Herschel",
    last_name: "Issacov",
    email: "hissacov10@yellowbook.com",
    gender: "Male",
    ip_address: "100.186.12.41",
  },
  {
    id: 38,
    first_name: "Milty",
    last_name: "Redgrove",
    email: "mredgrove11@linkedin.com",
    gender: "Male",
    ip_address: "57.59.163.34",
  },
  {
    id: 39,
    first_name: "Meriel",
    last_name: "Pipet",
    email: "mpipet12@1und1.de",
    gender: "Female",
    ip_address: "123.115.30.72",
  },
  {
    id: 40,
    first_name: "Bette",
    last_name: "O'Shevlan",
    email: "boshevlan13@mlb.com",
    gender: "Female",
    ip_address: "247.161.191.110",
  },
  {
    id: 41,
    first_name: "Isaak",
    last_name: "Andriveau",
    email: "iandriveau14@bizjournals.com",
    gender: "Male",
    ip_address: "251.19.241.17",
  },
  {
    id: 42,
    first_name: "Elvin",
    last_name: "Christall",
    email: "echristall15@free.fr",
    gender: "Male",
    ip_address: "79.143.112.221",
  },
  {
    id: 43,
    first_name: "Nicolette",
    last_name: "Lease",
    email: "nlease16@desdev.cn",
    gender: "Female",
    ip_address: "164.214.167.110",
  },
  {
    id: 44,
    first_name: "Pamelina",
    last_name: "Kment",
    email: "pkment17@networkadvertising.org",
    gender: "Female",
    ip_address: "214.174.90.60",
  },
  {
    id: 45,
    first_name: "Billy",
    last_name: "Lowes",
    email: "blowes18@hugedomains.com",
    gender: "Female",
    ip_address: "63.187.192.225",
  },
  {
    id: 46,
    first_name: "Allegra",
    last_name: "Bischof",
    email: "abischof19@howstuffworks.com",
    gender: "Female",
    ip_address: "146.150.26.100",
  },
  {
    id: 47,
    first_name: "Olly",
    last_name: "Wyne",
    email: "owyne1a@samsung.com",
    gender: "Female",
    ip_address: "218.67.24.8",
  },
  {
    id: 48,
    first_name: "Daffy",
    last_name: "Gorey",
    email: "dgorey1b@yandex.ru",
    gender: "Female",
    ip_address: "223.188.150.61",
  },
  {
    id: 49,
    first_name: "Maddi",
    last_name: "Schout",
    email: "mschout1c@blinklist.com",
    gender: "Female",
    ip_address: "183.228.146.208",
  },
  {
    id: 50,
    first_name: "Eran",
    last_name: "Bowker",
    email: "ebowker1d@ask.com",
    gender: "Female",
    ip_address: "25.171.87.32",
  },
];

export default MuiTable;
