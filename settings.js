const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = ['94759094698']
global.ownername = '⚚𝐒ᴀɪʀᴇ𝐍🪽'
global.ytname = " "
global.socialm = " "
global.location = "sri lanka"

global.ownernumber = ['94759094698']  //creator number
global.ownername = '⚚𝐒ᴀɪʀᴇ𝐍🪽' //owner name
global.botname = '卂ꪶꪁꪀ・ꪎꪫ' //name of the bot

//sticker details
global.packname = '卂ꪶꪁꪀ・ꪎꪫ'
global.author = '\n\n\n\n\n\n\n\n\n\n\n ⚚𝐒ᴀɪʀᴇ𝐍🪽 \n\n\n\n\n\n\n\n\n\n\n\n'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Nero Bot Inc."

//theme link
global.link = ''

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//text bug
global.xbugtex = {
xtxt: '🚨DGXeon🚨',
}
global.bimg = '//9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAZABkAMBIgACEQEDEQH/xAAfAAEAAgIBBQEAAAAAAAAAAAAACAkHCgYBAgMFCwT/xABYEAAABgEDAgMFAwcHCAcCDwABAgMEBQYHAAgRCRITITEKFBUiQRZRYRcZMllxmNcjQoGRobHwGBokaajB0eglJicoMzY5uOEpNzhHSElTYmN0eYKSyPH/xAAdAQEAAQUBAQEAAAAAAAAAAAAABAIDBQYHAQgJ/8QAPxEAAgIBAwMCBAMHAwEHBQEAAQIDEQAEEiEFMUEiUQYTYXEUMoEHI5GhscHwQtHhFQgkMzRSc/FicnSCkrP/2gAMAwEAAhEDEQA/AN/jTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTXQw8BzyAB58iPp6CP3h9fu5/Z9Qx3cMr42x7UpXIF4vNVrdLhViN5KzyU0xQh2blZ0iwbsFHYrmKpJOXrhJm3YpAZ2u7USbIoHXUIQ7tnoDMQFVmJIACgkkk9qHvmRdOQ545Dn7vrqAR+qFsUTVOkfcFBmMQ3b3I1TIS6JhARD5FkqidM4eX6SZzlHnkph1n7C26LAW4c0kTDeTq5d3cQiDmTjGQv46cZNDri2SfLQM4zjJgscZcBbhIlYiyMuZNMFu5QhRoEiMaDqx8gHt+h+49++Xn0mrjVnk0uojRatniYLRqiTVAc+T/tmf9NNNV5YxppppjGmmmmMaaaaYxppppjGmmmmMaaaaYxppppjGmmmmMaaaaYxppppjGmmmmMaaaaYxppppjGmmmmMaaaaYxppppjGmmmmMaaaaYxppppjGmunIcgHIcjyIBz5iAcciAfXjkOfu5DXjOfsLyc/HqPkHPIFDuEPIph9PwEfoHmIaY7mhyT2A5P8AAZ5ddDGAvmPkHA8j/d5+gc+fr9eA9RDmvjKPUUxDWZiw0nFDCXzdkGvOXcZJsquKEXS4GUZmKk5b2C+zQtIs/uyo+Gq3qLe3SBXQpILs2iB3LxlX1krOu6TPkIar5Jt1Sx9S3axhm6thltYYl3Z4hdJRq7rdms09LSjyQhXzRV21lGEehENpQiqZHAA0ExFKC/hAZG8BeRf1IySmlYgNMyQJwT8w+uuDSoOS3PAO3nuRWT2s/VG2owNmkK3CzVzyAnAOnja2WSgUWfnKrWAj1CkfOXsyZs0Tl2jQPHOs4qZLEmUrVwUR8XwklpoYuytQ80Y/r+UcaT6NkpFobO3ULNotnzArgsdIO4iSQcMpRsykGbuOlY9/HPGz1q3Xbumq6aiZRIYdUFs4iOZRaMWyYNWTEETo+6s2iDVEhDlMXgEEkyJF8jnES9odwnN5CJzc8HXxc2RYqw1Xu2TcdV5++evp6rY3vc5TKzahlOwkwytFeiVAiZmMmW4LNZVi4aFRfNHLhosCiSgphVFDOQrOy2RypsUbHiueCPHPP0u63/T3VRGssDIR+9dxN89AABvT0BGJv8rMKrg3xPLcdursWT5CxYyxo+k6pQYaWVh52+w8pIxtouj6GfNQfNqm/ZqtF4GqIOmzhk6kvGdL3FEwlZnZQBzuJ3XU2m2G+5V3h71aNKXi2uNu2JMjsIKu4hUsT1bHCmQ45onHPLPIVRVUYxzLN49uJCOAZ+IVyYjlwu6UQbmRtrBOMrUL2EFKPiIOOL/9mgg0j4ln2lP5diRQSRQFRUC8JHOJleBUUVMekXo15MrVxxnvIzLKTbcry77scpZAmEVxMWUj6u7rlemWEg7aqEFdNqBn75NmYyyoGKxWbpFAWypyX0hjWf1ne9AVyByVNDx9ORXe/OVxy7Y2+TuVDVcA8iraye/n3/vLStXWZue+fL1AaQtNhsEYExJXms82JDQgSFizFa0Yi6HO6XVTM6GMgMfTDApm0a0EppBYVnD4VVE2re4rpvYlm7RmI26yBiWdbwy5xRc8ZUty2Wi0VchyUhkGumlZdKGj1En0XFVh/jeUiynsDBu8k3jsjuLE0ei4Xd6wXS428ZXzbesj7oLrCzbPJW+HIbzF+LUnApLmhcTTSsYvO5GfNPEcuYJnGRdWcIGVVcg8WhauQwQ74jqNK++g7XICHqkFDVuAYtouEg4xnExMaySTQaMmDFBNs1bIIIFIgkkigkmmQqRCkKUOCABedeatYnlCqgX5exy3FlhtIHHt9ee4N1nv4ieDTFjIzNrA8W1qNQLwWok1bcDjuDRBz3ummmrWY3GmmmmMaaaaYxppppjGmmmmMaaaaYxppppjGmmmmMaaaaYxppppjGmmmmMaaaaYxppppjGmmmmMaaaaYxppppjGmmmmMaa6cgHH4+nkPP8AV66APP3/ANICH9+mM66ef+B/92u0DFEAMBgEBADAIDyAlH0EBDyEB/miHkP051gXJm6Lb3h9w6j8hZdo8BPNUCOzVL48xkLqs3UVFsmq1pkaq8tDpM7hM6AKt4o6QKEUAxy+GcS+EgVZA581z9Of0ypVdztRWdv/AEqLPjwPuP0zPfP38B93n6/2Br87p23ZILOnayLZs3SOs4cuFU0EEEUyidRVZVUxSJpEIUxjqnECEKUxjiUpTGCovI3UavdrRXjduuKXUYzXbmaHyNmlRWv/AA1yoCqQvobHMa1kpGaSbFUI6buZycrxFXbRVmtDqtRBdaGd7TyNm5gRhnjK90yjEkXI6PXFzRVMqxhQIYoHcQFDYQDJ+YiZCiX34jshluVu8V1DHNQHLMVRSxsAE2FN0eG7Hv71x3yQumVNramdIVPdFBeUdrFCwD3rcRVgEHLRsndRXBdamZWlYzkVMzX1mxflTSopmkrSIabTanGPbWy6JSCcc2YmeCUkkevlsUiwSbvkQjzSSSbNSsK9z+ZtxsS7jtzVzTsMHIyRX5MaUJaVqONolBE4rsmJkGirSftAtFvDMDm4Sk2fx2pXLUjIyp0A9W0i6jjuAKRs3i6vXotsIACqhGTJs1In2mMu4dqAUwAmuIKKLrGMcFDCYRKceeLsMovbcYEsUYpzJmlMztRkpJ4qoMna6+0eJdxzovbKUrKAaHBMPFEi8gXsTUSOYoe8Iia+sMZhLaiTbJuG1FPBHF9iO3uffxeX41kKudFppaWj+JcqGAHNgkfu79xXbg+2QoWswtYjGMNAMW8ZEsEiItWbUgFIkmikVukAnN3KqmBJMhTKKqGUVABOqY6pjKG9t4f4/wBn/v16d48nKxaE6Lf6rYcfXRWOLMM6zbGzJu9k4jsKKkrDumD+RjpyPbrnVZOncQ/eNWr1ss2WMCqJia94A8hz9+vUAB9DDaOwUAcACrI548+90e2QZRIWufc0j24aQ7mPItt/+oeLuufrniMcqQcCPqBhAeOQHtDzD7+eQ7QAOTCIgBQE3AaxBd810iltZHvlWc3MQ9ooFXmK3BScO+sUY8yNbq3T4BaRiTyCLyObC8tMZJHM8RRUVhzKPWibkwt0F+bXq0xNHqdlt8+ui0g6vXJmxS7tZZNFFrGQ7BxIvV1ljj2IkSbtVVVDKcFApBMf5fPWmZ04MuSGXeoPYKqgV+/b543BR+a52wqLgocsJhaXyJl+Njh8IgrKou7ElXl0QTURaIDH+7B4qZiIa9eXYwLDd2NDvx9v0/y8uQwfODAUAg3Hi+LAH9/1zZ36h9/rVC2Z55m7VbXVPYvaYvAspaNQZvJYZidetomKj4iPfOUEXzl9ILps1G4qAsVuZdYgcpBqibp8Ytu5+lpm5CnilAXncdm2OoFdnJJLwWyVFbDSWVilUBWZqk90bVyNyA597RRct0zoLOvCTFDhDnfXId5Pz5uf2xbOcVMV5h/K02QujWvg4TRZSc/bZyaiknEkYiarwE4CBor90B3pjt2iDxdwCJ1zrmLsX7BdtVSxu82X4DtcfDXGLxtDN4VeNUjnSUbMXmuY6sD+WuaSDgTHM1O5jX0ik0eKHQM1fESXSKDgW5oy6r/vJlKH1KVHBPqIUKR44IDcA9vI4yXGIhCsBLBjblgp52USp8cgHyPFDLKunfttha/GobgH8RYYKVkqq4xrjmuTKDmMTh8asZCOXXml4R6gR63l7VPRCrhg8XcLB9kW0Ksy8Esu8INpoAPcI/f/AHcen939X050KHHPygH94/dz/wD768j9dBOUo8GHjkQAOQEOREQKAAIhwIiYQAOOeREA9RDVaggUTuY8se+5j3PnueaHHtkCSUzN8w2FApQTwiA8LQoAX345JJNknO7TXYKhAHgTAA8CPA+XkUAEw/sDkOR+n19B117y8gHPmYeA9fMeOeP6v+Hrr2j7ZbsDyOar9eBndproAgIchz/T5a66Z7jTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNNMY0000xjTTTTGNNNeBcwJkE/Am4EPlKACJx8+ChyYhQExhAAMYwFL+kYQAOQ8JoE+2PIHv/n9883PrwIeX9n7dcbtNvqtJiXdguNkgKrAxrZw8kpyyTLCCiI9o1SFZw5dyUi4btGyKKJTqqqLKkIRMpjnOUpR512JzKeddxk8plSdzjljFcdMxqKNWx3hLJVhplUrsB3++sE5Qsa/UTsdtKV6ZKZsjoiKcmKDcjKNjY0pGBeMP8Sw9jWM6yBacjZYeGBEPesr36yX5QCtzdyJfDn3zlsJCcnIRMUPDImocpSgBjAam5G4VBzVHcBxwT4P1r+3maINKjss2rNoPWIYi5DggGMlmUCrILcixwD3Fws11Hdrkc4O2hbBe72ZNwLc7yiYjydPwgh4RlgXa2UtWbVuVanAhkyuoWXkkiqpqFUEnYbjH2QupBAx8C2c4fw7fsk2R4sRIkZZuzGEPHJqGTKV3Ky822lHpEwKZQ/urKEduzCj4RiJGVIcICM2LNi3SaMm6DRsgQEkW7ZBJugkQocdiaSJSkTIIiYRKUoFE3abgvmAfobtFXTxmwaIqunsi8bsI9m3bruHLt27XRatW6CaKSgqLLuF00kkiiKhzmAAL5hzc+X6DudQ19jVk8Gu4B/T/wCKGbTb1+TpZG2nkzSWWXgcKqrQ55F3d3wM5ZZNwO67JjmTXs2WBxpXpLsBCjYpjImJVjk/FM4RKfIrori6PH6ICg3cSEU7r7V4RAVQiWRHQIjhOJx7SYF1ITKUQycz8k7O/mbVOqKzdmlny5QBaQlLLOKvpd67cmHxV13b1U66hjLKGMdU5jzOou0DONzeH+0EbGYygUyJKozFicNJ6adgsQ5kztKjCyhFkSkABScp2CagXyZlQMRqqZI5NSmqewbGMVOxVjtVmud3VjkBIrWH7yPjKG/d8cleO4FhHjLuwROYxkmchZX8coAFK/ZvQ7wPHZAaMYZ2BFs7cVxZqqJuuL/SsqbUSsrI0iRRFb+VEq7GPpoMEIfaRd+sWeb85VWylkHsovXIFjKW20IoC7dValxErc7IkkJiFB0tAVdrLSSCACqgCzpyi2QTM4QMuomCxDjJar7F9wuR0Un1muiO3mPK7UKpEtoWtZKt8w1I4MnwKicwFZqxF0UhcoLlcWN0fx25XrRmp7wgjb3VcfUajIuUKZTqpUUnixnDxKr1yHr6Lpcwhys4SimjUqyhgImB1FO5Q5UyFMcwELxy7u4AQ4/REofzfqIciACIDwXzH0AR4+UDeQDcKliCzXQHC+lTVUDXjgdv6cZQJ0jVRDEvzBQMsp+axoitikAKF7ICCaABs85DukbFNutWSbOLDTz5OnitUUpKXydKyNyYyjxJM3iyX2JlXCmPopyosodcCQlUYJJqFRVKArJEULLGHgoSAjGcPAxEbCREc3RaR8XEsWsdHMWjYhU27ZmyaJJNm7dFMpSJIopETTIUCkKAAGokbjd+O3XbNJlql2tasvk56wO7g8XVKMfz9vllPCRVbN1wYt1IivA8BwgZs7tMpCs1UDKLorLESPqAq2/jdTf35JaPpOPcG0bwk12sRKLK5EyFIJreKZFy8lk5Gu1mHFZI7TxYgK+/VbrGcJkmHHKDlC2ZoYiBuXdwKFmuw83wD79/r3y+NJrpo/nyFo4HNq0sny1aqPojBsjkENVdiO+So6isekpXcFSacc1Wet8yuWy0ko1aGeNIlxiDKnjNCPToi8SauZNOMWUborpkXdN2iixFQQRBOvwB4JyIgAAHqPoHH36jDt3315i6idaaZvyGxY1GrVd5O4zgaTWZCW+yk9PVSQVRlsrmhpF649xnZoXriLatliuTw8CBY9q8VMu/dv5LOVhRSAwFTEvyiYypgIQheSl7jmEflAROBQHtMUDGDu7S8m1LjjIG4AkNRAAIPqqu9fzqhlmeIRrCoYM6hgaJb0tRUD6cDj/jKweqDZ7dYsaY62vYvenLft12R4vGEsWPUBSRjMPOEXKeWbYq3D5koCvRbyHaTKyjlmmb46i0B4gq5TSGuPYPs5r+3Hqo5trUfW5SHrWNsYwEpih3JldKpzMVc6tCMbVPRr185cnctwmTWRkZMhu1ir71Gi1SBv4RZR7Q8rQ+7ne7uG3TScqnH4gwhWY3Bm39OecpIR8i4sKrSWyddWzWVVQVj37l9VI5kku2YMzLw0si0O4eKszHUzDubpzO05qjsg0Tc9jDD0NPYxmsSZmnDP2i2RoqmO5RlLRT7F8g2mmjSEti/MzGFmZpnPNYcXLWSaxbtdr4ClMjQpMglkjShyrsAR28X9ePfn2z1I9UiNsilCSCiwQ83tPf+g9+471BJvZonNHXxq8lFvm8xEYdxrYKuZ1GuSP2ZZOGpV5SfNAXRAybd4xmrTJRyyQlX8B+xWDkViCmXYA2G7usSr71cuTdouRGuKaPDstvlcvzyPRTxk2z/JWFKQt8EvaVwSQjrIwjm8PWUJJAF4NZzPuYNWbbvJNFrI6685uCwZsyPuozHiOEx1PXCJPijbbt6tEop8YcW6Wh4o07l27T0tFMVph5Yk0sjx9sv9lFyirbn68Uy8TxGqRVPYP+qNtH2j4Jq+K8W4lntxyEeyjHlxt0yya0eHv1/dg3c2HIFjNP1uWfSk5YJVsWXPIO4Nd0qcI4BelFv4pInzImPokVTYKhu5Ud+Dzya/t2OTlhkbYBA7oYNspUU67yp3WRwVA783285v0Zl3c4OwtByLuYvVfsVqTQOnBY6qcozsN4scusmb4dGtoOJVfPY1q7deE2c2GYbsq9DlcEdTEkzakMoatO173NzeVWzVtEwsTtoiyuFzSPwedg8oW6caLk9xRjyTkpWmENAceIo7WWiItzMJuStCMpVskxe+/6M1h64+e5aTfmw7t7wpjBo5ZOTrjE12UtF3QSKh4zlwM8Z1ExvIHErg5/somoiu3SUEDplVOGVsadRjeHt2moeybiMbS1ylsmVeXsFDQyXkOwCSHj4SaasPikVQ450EZV2ztY6iB1X0UhLyhUkHTZZJqR4VzYfWMh9UfBdVHamsgHxdcnsf6DLsXT1VFj04STUNQqdNxQAj8qBlCt7OxYeSCOBtXKTG6Ot2t1kGjbosvv5hqdtIQ1OvlwsNpxgs9an8R4xn63IyiqTuGmkxO0kEUPdFo4jgXNbWi3bRuo2xPmjqb7kccoOEtye6nD+CY1yU6idYxNVWrq/SrIi4FL8FbvFrPd0CqLmI3F9EolFJsVydWQBMiyhdWTcJ1690N+rk/QsdUyj4cF18Sint1r8lZJi5oIEUTRbu6rIuXrBjWXvaV4Q7k0ZLuUgcEVYrNF0AVPX6S53a/t2VqyDbbLdbPJM/HfT1rm5OfmHR3qirowryEs5dOz8rOFlVAFQU+9QTJppCZTvha7VSaWEzINqnbagkGm47km6vwPfjvmW6X0+WdzHqo9OxDL6/lIXSq5Qj0iyOSwbkcds+qr0us1NdxGxjCmYmEhdJZjcHOVfcpTIdklLbcpJpX8z5EqzZ/NTs04dSa6jxCETcM2btdQ0NHKNIVMfBj0wCf2qcugCPPSP2k8cgHgZtAOfuDcbl7jVxustpXMumgkPd4Y2N97ZATf8c1bXJ8vW6tAb2amdb452yMPAA/gAMaaaav5ExppppjGmmmmMaaaaYxppppjGmmmmMa6D5ciI+Xl9PT/AI867RP5cgUR/wADzzxz/YAiIiHlxyIYZzhnrHm3ykSN6yLLe6Mm3ahFwjAEHtptEqsIA2hKtA+Oi8m5NcPFXOg2+VoxaPZF8o1jmbp4j4TQLHsBfn+wOeqjSEKgJJIFAGySRwDxXcWTxz3zMwmAoiAmAOfIAEQL83aJuAEfUe0om8ueAAwiHAc6hhlPfvt0xBk2ExPaLNLurPIWqCqU6vAwD2UgKLJ2f3QK+Nynzi0j2iUmeQZkFCGPOSUcCwryjBm0IZySquZ3IdQ7eNkmyVLBFZncW43Uj3sc5jCw0GwiYqJcJM2zlllDK87AzrmJvsm1miySNex4dtMR1bXjZOLjH66bqcdxxvODk8Z1Vtg7ONLlsQr16wws5WJ2BNKvq7aLJGKNbKxkce3GUj3MfcpKCdPWSsqzcx7r3SRN7i/ijoAduMVJ2lYKisoJG53VgK9lB7X7nz5GZj/psOn2NqpROWW20+lYNJFR5MhIsOvDKqbkaqZheX87i94NH26WKg06Wrduu1syAWYfM4WnIwaqkLAxKZCKztgdzUxCNI9i4fOEGccUijp0/FCTUbpKEjHJywPsHUE3aSFpdJ0vDWFq9TU1nPuS94tVnmJ902EVxYquk617kzZreGVAzlBEr5IFjHSI6MmYVkY6Yvw3uqz5arjcqtVnpVpX4L9qszbmmdjpS99M1ilWsGNOhK/Vk/i0PEsEEY9J1EwMZCGbqNjounjpZ4TXgyDWcwbfrOwrG4OGp8anY4xSSqVyxyvaZulSy7d64bSME6kZ+Bh3sfYmaKTCQGOWbGKozlGxkVlRIt2VgljuaRo1BI9KbgaI5P8Ax9R7ZZ+QsRSOOKGabaGdZG3u5Y3YRJUVAE2gKbbcGLAcXN8nU/iMe0JtPZzxRbkppmg2TnneKF6hO1gXhwRSMqxb3G61KyIFcujiLeOKxljoIrNkvib5Yqxxy9t66jOFtxNjCpRFPzjjqwKvSMI9plTFMtANJV2cUABmhMQbu0QjBxw5TN2TcnFmOACokQ6YlA1ae3Km5PyZvL2/WSIxRlCKx5ih7crvY7peqbYqtj2SQmKFbKKybwz2Sigb2GxoSFkjX8M1aqlKh7s6ljO0WrFUx9ifwiiIDz5h68chyA+fmACH15EOeQ9QEB1Wu5n3JLujAHBQAsSOa7Ec82e/bGpig00aJLpgNRMhlLRTtthBakDRneNxQG03HaavkZ5A5EAH9gj/AFf8ddddB5AOfUQ9eA9f7+Pv+ugDyHoIft1cJr/L/pmL8D9O/wDf6510128iI8AHn9efTj8PqPP38adwfgH9Pn/w/t0JA7+TX64BB7e1/bt39u+d2muwDCPPAeQf1/j94CP3ByGu/wD4/wCP6/L+vXv0/X+n+4wCDyD9P8/z+uNdggAB5FEefIe0fP0EPIeQ49eOQEOBHkRAAEQ7vP7g4/b/ALuP9+u0VCgHP0H054ABEAE3ACI8c9oCPmIB94hzrw15r9f8+2LH+c/53ynXPOzCUw+/mr7g2El7DjyWmJiwWTGkSglJz9YmrA7UXMrjyIatopshQ2RwRIasNwlJSKUUIvGgMEm6RjsEytNvcOwGTk6VbYtgkgLlw7katPtUEUSgJjgoY0eYSLFIBzikYnkRM6nd2+eri71ubwDjdy/j7hlmkxszFLJISVbZzbadtbJRU5Ui+81OA+K2VICqiBDmPFFInwIqGL5BrAJeoLiN477IilZWkWfcYCyzmuQsEzVSKIFOs3bztkjZcUyeZzCrFoAKZROUT9xeI7hdw2zFbPYHceK4A5qqHH0457TQXlVWlgZwO0liMEmqLFl9V+9kkkZWPFMbLaZtKtVOFl7BZnChCJ16Pi3SMiTxURWbi+UkCMWcK2WTFM5H846i40EzkOo/IkcFBs22nbYpugdmQ8wx0ApkZQ6h6xDxxiyJMfRj2PcMnaR5QDLsnlskmzpZnOPoxZWKaNjrxMQ9kWJ1pSUwZnPqPyUbSplxhujjUrJFOW71za8/smaVDQq7HxXljfRcRTL0E9YZpKNSMMTGOZGssFFjis+lEiopIOpR7IrVmbJ2BKtmjNNkdPp7MLQL5XqeNbgKzC0ahTD989oLONj2ManYkZKepC1fn7Kyt1ouLqGnHziMjJUGLIwvaVVTKqu0khWmBPp2k7eWB4ZfPBuzQFZckjeLTFxHFEHdUB3F5WAC2kYT0Ad7JIJ4BocGY3BQAOAKAAAAHkAAAB6AH04D6fdz5euuoiAeYj5en9P4cef0HkP26jpl/dLiXDKYtpuUe2SyFVBEaZR2zex2hAe4pBUk2pXrRjX0PM4pOLHIxCTsUHKTIzpw3VQLVzuI6i1thq9arNY7hRNtmF2aKKKFpl5NibIKiqyzlsDWVsNgUPUoF1KoKA3JXq9EyliaSbNJeJuShVjoo3pJUjoGySQAAP8AKGRk08jgGtqk1Z7/AHA4J/z6ZZtk7dth3FszLVWRlZmyXOHQRcPKlUYNzIP0vemZnrZqrOSBoulMZBRv4CwR8taGDxJB22droEaLEWHVz6m/Xqk8UzknjaXtbigR4v267LHG3iWk1M+qNgiW66ZMmZLevGFQpcG9cr+L8MpZ1LGsg7bGLJOEI5cr2ivc/wBZWwWRpasa7NGh8aYkr1YeNjX2ciUFciTkstHLMlixJH0nNxUTDHIoiolILR4Wly6aA6B+0TV8LWug5XWdrLLu11nDhwoququsqdwusqufxV1VnS5lHK51Tj4gqLqqqAIiAH7TGAY8ROt+YqSMqx0HUAc9vTZ57X9rzYOndPjT94VDvVoZQCgUEbiVa/V32GvSaPcA5aJnbqybjspSMmXGj1vg6Fcyb52EzRlpNHLNiM5dFVNLXjJa0svMy84+MRZzIO2KzFN2s9dkcEVTV41GyL3sbu30gBZ/dHuHlY73Z+o8YvMz5EVZrlKxcFR94aDZSNj/AOlGbl4MQRAwpj/ML2xIBEEw+UB5P6eY+vl9/PH0DkOA5DyD1DX70BBGMlDCmXuVFk1L3G4DtVdAooAGE5OTl91A3aHqBiCYxSCYQTRpp2ijSBn3AEyWvpPp/NZs9z/P3zIPBHsYvUjbbt+doUCgu7tVmq+ldic39elnTBpmw3buiciJV7HSGV3dnSMQ4uV7eJpn3tU6QAUTqJLk8UQER8Tt8UTAHIcc6rO5o22vaJensU4XQuuTyPcRUM7VNUzplYLfXpxIZlJVBVus0UhWLN67bOyLEOlIEaEJ3nOCYy42xVkKJtvwJR1CKJrVLDWM666TMA+KV7D0uGj3YdqgJmETuEFRAipEzAYfnAo9wBqwdXPOS+cd4bmnxc23kccYChoitQ6DIyCrJ1kR+zJO2aZK7QOt70vHoyzGtqEMZIGjyHeoqNxOHiHlajVfhNG0rK1hAoBIYD8osVyD4B588+2s6TS/ieoBFs2ys1WaWwTdD2BFc+xF3VXlWhUoGFZxwlIcyJBMsftETqOFDnOsY3cQhhKB1BBMDkKYE/UofNx6eyiZhHzsiImEz9zGMyAYpO8yTcyLcCcmIKglOBjG5AwgcvcYQEO4dc4cHBBuocT8dhDmDv4JyJSiPHn3CA88ceYiI8eY8jrDeTpw6CleiOQDx1CvnYiUnaAgZAjchxEDHJ2Csc5h7eDlAB7Q7fPn6b9brVZmcljZLAlT6qHB7+KP0zpmtK6fRMVEYCqqqCoLflUGgAT2rx5v746tz2QCUdwp3791Ds5ORkmkcs7cqM2LiaKy+IuGTRVX3VBWQBkwB8qkgVR2LRoK51DN0RJJXAeO8qbpbFAYIwvWi2S9SEaovJKSSzZjXoCuRSCJnk7NSbxZMjZigTwSgVNN0s4cuUGzBo8dOkW5MhbVthuZd8+TXzTG7NGGx/GLpNbblSdazAUyEcIMDOjxKL+NYPPiFjdkTIRvCoGKsQzhAz4zZsoc4bg+K8PbQumDg134U5AY6rniM3Ntv97tCKNivtjFoyjgcKOZJ42bOZGTI3Kqxq9fbtGZTCK8dFkAPGLssOmDyB5i1IsYUqQosd+LsHtx55885pE/UQm6GFWeYnaSoJHbsfsexJodve8MbWdnOFOmRtuuuQLM3ZW261uo2u75Myf8IZvrA5houLRl39VqixIllMI1RIkCgo1hFiHUeyh3Ei+ESrkSbavG4zc1ftzuSJzON+cNQezDI6FfrjBNUISo1SMZj7vEQ6blw7WTKYG4PZpYHAg9llVVzD2kRIhZvu964CuaIiw4T24Up1X6fe4uZp1myBeWrb7Su61Pw76Jnm9drzGXesItd63eJFZycku7VKiUyoRhVFUHCVB98k0Ytp9n48U0kmbAkaCbcSiVH4ioDpUwcjyBCtWYk7QDyBYxSAHy8ytZMjfKhipUHqd5BbWpWtt2dxrg9uck9H0zoZNZqWIPaz/p3Edh+YECvFcWLzECgnfyHyj4ij96PIFAeBFy4EwFII+RP0wD5hAOR8h5HUzoxuVrGsWwFEngsmxCEEQ5ACNygHp5Dx2hyI+fl5/XWF9v+AMxZ/yFXKjhugT96mVZdiisuyiZZau18FVVwSlLVNsWyraChm3u6rh2+fKpJkbNXJygcyJ0xmNuO262Ta9LwFDtmasc3TL6zhrIW3HuORfTkdUoR2gokRvJTTyMbiSxs5CNlEZGLWVRO2j/AIS9IC4Sh3BY/UdL+N0qmKWMBFUnexWyoUmuOexv3J+vGV0ur0mn1DMZQzOwtRYNe/HPn7+4qr+jn0AwAOkftIAPQG+bPryHnuMy8PkP3eerjNUzez4uiPukBs8eJiUSOo/M65e30AD7isuj2j8xvmJ+gfg3HeU3AAHkFzOsppFK6XTqSCRDECVNiwguj7Zo3UGDa7WMptW1M7KfcGRiDzzyD5xpppqRkTGmmmmMaaaaYxppppjGmmmmMaaaaYzD+bK9mCz0CRg8H32v4yvr50wI0u1iq6VybQkeRwVWSVZ19ysixfSK6CfujYJHxWKRV1lVUFTkTAKsI7pV5qcydls1u3mfG7hal3DiWtK2E0pOeWVdKJLrHTfTOTHTZkQjghlWjONjWEY07hI0YNkRMiN1+mrckSyG3s8AVZHaqPFG+PN/yyXp9dqNLC0MJiRWYMXEEPzTVcfMKF9ti9t128i8wZt2wRXNueLobGNbfP5pFg6kJSXscz4IzFlnZVydw+l5IrchEE1RIDZi1QQAEWkcyZMk+4jYpz5vMmBh8wKPI8+ZSjx5cfX15Dy9B5AAAfLXk05AfQQHVYVVUIAAoFAdwO3vZvjk5FdmkkaV2JkZizMDVlqJsLQr2B4A/TOzt+XtHz4EOPIPLtEBDgOeA4EOQ9OOA444DXaJSlAAAhQAC9oCBQ4AA48gLxwAeQcB6fdr8krKxsHHPZiZkWERExjVd9Jyko7bsI6PYtkzKuXj586USbM2rdIp1V3Lg5EEkyGMochQ7gr5zp1U9kmA4R9N2TMcPZWrBumsq9oybmy1cHCrsjROOXyQ3InjKMlROJlDRMtcmMkCIJqA0MDpmDnwuikbiB2ocdgR2Hb2/XK4dPNM22GOSQ9iVvgmgN0n+m/cn+gyxIofhzwP0KUoc8cc8c+vHl+GvJ9fx8v9/H+/VEWNOtMtnKOd2LB2A6RkarJP3DJrIRu6CmLSP8kKRyml4yEpViLBuAQdNTOGLp6q4bqKdo9yRiLDyVbqpbiUHJ0g2Eru2wAH+nNdy9N8HzKURMVJxQkXQlKJvPhAOQAePQOaPmqprayrxTfLO08CqK9796/5mL0fXhghhAYgcNKpY+1Fjz3Pb78ZdqYwABgAQA3A8c8+vAiH3ch5DzwIccD5gIeVWG4jqQSuMMk33HmJcMnzAricYlC9yP2x+zqTqckWCUwvVaaVpXLGjMzMVHHMzmRfOYssZYDDEKN1V2jtRKvbcp1q4yt1OOQyNd6Ps3VB04XmmDG9wea8l2yMTZrlWh69EQlLM8gUSlXbulZuMi3k0RyrHJxz2GXIqZ7WPWuo/SbJalovFGJLPMRlsNM3p7k7LMk7x04vCUg7dyU1d46LtEE5vF9WcPXD2Qm5FFiK7UrxJ8/WYNXzdYlhtZpi2xtQun875CE8eAwJP3qjX2ufoOh66edoF0g1WoBQCHcflJuK+qWRWAHJIAB472fF8Uv1eZefWYR2Itneb5N4qzTGTe5eM1xTFRUiJCnWakcMo+8KySLcxVUTOipxwnWAvY3MmoChMaO9/O/JlLISB6htvXjToqqfYpvJ35xPux4DgjWUbQZ1TmS95aCoonGnSOYQEPABdJEK74bc3ZnDZJ26iICTYPiJu26kS8cN2otXCfipFbOgK595SOCiZiOygl45A8YhO05ezIeO91rnHFhfW2rQsvXLPJtVmslOR8y2lXLhgqdNVWPXLMRzgoxxXiKcgjG9oRTJ4mV20YpLgKo42Xq3TyxWDXmV1BDLGA202vqAAuv+O15uw+DOsaIxh/h3prRkfvvmSnVzyD09mkZzGa7FAtcj/Vl3O27ePljIbSfltx+3VbavUINsbw8g5CvreIrU7JFI2WIxi2d1rdHmSFUaGfvBfqpKMEk41ykZcVSGDWZHu97aMybu10NxeI507Fmd+q0qt4grbIqIkT7/AA20fW3cm8dOFw4I2bIIGXcqfyaCZlB7Q1estb4cTzxiMcqz9Utx4/vVjS5vyyxtR45ddFQqi8fG3g8mSLMJQHt9xFqQQFXgS+II6gfUOpNjFvmTLdIRt+BcbVyrJUxejXCEdUhBhbWc9BC7n2CUysQItZ7CTCYpKptXrlUqbkFFk0h+U92LqIAYD5s4VPmMxitqA3UoXaLA+5PPOQZvgxp5yzJo+no6qqQx6uNIxTAkyHUyzSqQSQxoAUWVKza+tPUskbIEg2wHhmcmGaZXjVC+ZefOceQIq8Kpx8xBVdhD2SyWeNUVSXUWQlD0V0JSNkSlL7wZdCEF3tmd8uldK53zhLTNcO7Vdo0qooo40okYksoVyhGqBXhYzdgbsF00vc3lolZZ/wBgFQFyBV3Pi1RRO9OGnlfAh9xOPn51zAYiMbcMfOBEFORTKRBssUROqIAYAIlzyHcIj8wByNfKq9/Os3PkBKxeEIHO3ZT0Y5QRHuLwUWUY8M3IBOOSgoiXtEQKICAgAYrqHxXodOsSJBq5pJFtlEDKVIYBq5Hfivbmz2zYNH+y/X/NUfjOmxwErckLrPPRVSCJypCHuP3WwHzdDJ/Ncg4sros6/GzkGgdADpoos5FqqzZt2xTAdR1IeOZBJJIiBAFRyY6qyp0iHE51iCfG7rertRiLW7os9uDxNWbhHHaFeVy13iCq8skZ+3ZvGHDabfMxVM7bv2qrcqRjnVKoHaQBIcCQ/WSbCAcopcAIFIAEKHJeQEC8AXzATAU/HHmYpDfpFIIase+mLcWHfpkpECLqJNHVCeqgJDrFKg2oVUAPEA3PCXjuEScj5lE5eB8x1b6X8QLr5tX8uF4INJErkS7PnO7FF4AHuRYq6Bsnza+JP2eaDpOjhmOsm1Msk4RjukcURZJsAFr81+gOblWcd1e1KMjo5jbtyeF4ho3noOTka6e61mwObdExixXzuqqQcRKKzTqOsCIFZPk2RG67houLVJymRci5cB5z9oUocvHzdHLIZYyxFvyqNEIWBr9SxxQHCKIolIyTl2y6Nucw6xWxFyhJoTg9gHSMCqaxhU0t6CwGWtM9Z3BTKoAss2YrKHFUBMdUwHVQOcQMBUyIJokMmHJCnASmAeDBzqXkDI2SqRyJ+RdKzKq4gUvAEbxwnAVBAvI9xz/LybyMHkHAAGpeo6hqJp3h0zxWYPnEs21giqGcDmjxRH1zXdD0OGOBHldn/wC8ehG9JWyFLqCDzSjmyOPtlz+4vrtZlawaMdhTGdTxQ/cHFNjJysojf36aaSiXeuDCTrkREpmM0MCBgMzfkKqInAQOBDFo2z/uv3B7o5lnPZ7ydM3x7FoAhEtF2cRDRMSkCzlcpI2ErsdERLZUpnjkvvgszvDpKlIKwgUoJ4+ynIA+tLdMqvemwZC3IQBEClVOoodY4B5CImAEQHkRDgpOA5DnWOSgBjh3D+l2h9OOfDHzEOPqIAI+gevoI8hlunqz6eKaQhwEMksncEqQKHHb3Hfgc8ZRNpNMkzGKCthFMzFr/Kaq9t/Sv4DMpwxkWeM5twrwU8nKC0R5OPmAt26AdgCPaIgLcwD5Bxx5iAGKI4vTIPAD5jxx5j5CHp6B9PL/AB6BrIk/2x+OK6xMXtVeS6r0AHghhSID7ke0QEQAxvd/MR+YO7gA9S8ATEBLyHpz9PT+j8NXumxqTNIoZVkktaqqDbTfHHau9Gry861svwvA8CwD4+/2vOhh8+OR9B5Dz+oeQf1+f7RHVrPSW2Vl3a57ZylwjjOsO4jfJWbISa5XxEpxzIsHxKhWm67Y7QxRfzEQq9dik6IYI2PXEEFEzlHVUK5ypgJx/H1ECh5FAfUefv1uxdDTBEjinZ0a6z0MeNnM2XA95aOF0e1d5SUYKKjKgYFBUN3tVTfG5hoUSJqGJNGcCUEl0Q1MndjqIYhQFgGgLKgAmzXcf37Zi+paj5EYUGi4H9RfP6/7nLLdx2VWeDMEZVys/OUpKNTJWZRHhIoi/K3UaRSCaZyij4hpBVgmgmpymqqYiQgBlQAdBegGfOIZxIyrhV9JykvKyT1+v2mWeuXLs4quVDARMxzLKEMqHeimYAOHKaYj2BtGdcPdFS6dt4m9tEdNkcZMykeqyc3DtTqivXMaxljGaXnpE5EhaplmpqsNK3HRqrtvIPQfuXzdBdoxcG1q1xT5lWa6wB2umVUzcyqTfu7nDhwv4ijdBJFMoqKGOY5Uw4TAhjgJAVIfgBw3XpnkjijgFkimHehQ7Ht3APN8/oTX8OIIdRqNTIAiCIMCe7flJNntxddvA5z9txlEmgxKCzpNEHUh4i6hz
