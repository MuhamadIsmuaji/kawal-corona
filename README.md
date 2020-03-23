# LIVE DATA PENYEBARAN VIRUS CORONA (COVID 19)
----------------------------------------------------------------------------------

[![Build Status](https://travis-ci.com/Ekhel/kawal-corona.svg?branch=master)](https://travis-ci.com/Ekhel/kawal-corona)
[![Gitter](https://badges.gitter.im/jayapura_dev/react.svg)](https://gitter.im/jayapura_dev/react?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## System Requirements :
* Bahasa Utama :
  - Node JS
  - JavaScripts

* Framework :
  - React

* Services Third Party :
  - [Axios](https://github.com/axios/axios)

* Template :
  - Frontend ![Semantic-ui](https://semantic-ui.com)

* HOST PaaS
  - Github Pages

------------------------------------------------------------------------

## Sumber WEB dan API :

* WEB :
  - [Kawal Corona](https://kawalcorona.com)
  - [Ethical Hacker Indonesia](https://hack.co.id)

* API Services :
  - [Indonesia](https://api.kawalcorona.com/indonesia)

    ```javascripts
       [
        {
          "name": "Indonesia",
          "positif": "514",
          "sembuh": "29",
          "meninggal": "48"
        }
      ]
    ```
  - [Provinsi](https://api.kawalcorona.com/indonesia/provinsi)

    ```javascripts
       [
        {
          "attributes": {
            "FID": 11,
            "Kode_Provi": 31,
            "Provinsi": "DKI Jakarta",
            "Kasus_Posi": 307,
            "Kasus_Semb": 22,
            "Kasus_Meni": 29
          }
        }
      ]	
    ```
    

  - [Global Negara](https://api.kawalcorona.com/)

    ```javascripts
       [
          {
            "attributes": {
            "OBJECTID": 59,
            "Country_Region": "China",
            "Last_Update": 1584097775000,
            "Lat": 30.5928,
            "Long_": 114.3055,
            "Confirmed": 81346,
            "Deaths": 3265,
            "Recovered": 72355,
            "Active": 5726
            }
          }
       ]			
    ```

  - [Global Positif](https://api.kawalcorona.com/positif)

    ```javascripts
       {
	      "name": "Total Positif",
	      "value": "307,278"
       }
    ```

  - [Global Meninggal](https://api.kawalcorona.com/meniggal)

    ```javascripts
       {
	      "name": "Total Meninggal",
	      "value": "13,049"
       }
    ```
  - [Global Sembuh](https://api.kawalcorona.com/sembuh)

    ```javascripts
       {
	      "name": "Total Sembuh",
	      "value": "92,373"
       }
    ```

-------------------------------------------------------------------------

## Libraby Template dan Halaman:
* Semantic UI CDN
  - https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

* Halaman :
  - Fetch Global Data
  - Fetch Global Data Per Negara


