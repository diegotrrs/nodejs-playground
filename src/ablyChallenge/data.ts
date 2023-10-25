
// which of these 24 hours blog has the largest difference in values
// which one has the largest and smallest
const data = [
  {
    "timestamp": 1685537688343,
    "value": 12.13
  },
  {
    "timestamp": 1685540280343,
    "value": 14.74
  },
  {
    "timestamp": 1685542872343,
    "value": 13.24
  },
  {
    "timestamp": 1685545464343,
    "value": 13.82
  },
  {
    "timestamp": 1685548056343,
    "value": 17.36
  },
  {
    "timestamp": 1685550648343,
    "value": 17.38
  },
  {
    "timestamp": 1685553240343,
    "value": 21.35
  },
  {
    "timestamp": 1685555832343,
    "value": 20.75
  },
  {
    "timestamp": 1685558424343,
    "value": 23.28
  },
  {
    "timestamp": 1685561016343,
    "value": 27.45
  },
  {
    "timestamp": 1685563608343,
    "value": 27.87
  },
  {
    "timestamp": 1685566200343,
    "value": 29.67
  },
  {
    "timestamp": 1685568792343,
    "value": 29.04
  },
  {
    "timestamp": 1685571384343,
    "value": 31.21
  },
  {
    "timestamp": 1685573976343,
    "value": 32.76
  },
  {
    "timestamp": 1685576568343,
    "value": 33.02
  },
  {
    "timestamp": 1685579160343,
    "value": 33.76
  },
  {
    "timestamp": 1685581752343,
    "value": 32.74
  },
  {
    "timestamp": 1685584344343,
    "value": 29.73
  },
  {
    "timestamp": 1685586936343,
    "value": 30.82
  },
  {
    "timestamp": 1685589528343,
    "value": 30.46
  },
  {
    "timestamp": 1685592120343,
    "value": 25.59
  },
  {
    "timestamp": 1685594712343,
    "value": 26.09
  },
  {
    "timestamp": 1685597304343,
    "value": 22.68
  },
  {
    "timestamp": 1685599896343,
    "value": 20.08
  },
  {
    "timestamp": 1685602488343,
    "value": 20.67
  },
  {
    "timestamp": 1685605080343,
    "value": 15.96
  },
  {
    "timestamp": 1685607672343,
    "value": 14.68
  },
  {
    "timestamp": 1685610264343,
    "value": 14.13
  },
  {
    "timestamp": 1685612856343,
    "value": 12.17
  },
  {
    "timestamp": 1685615448343,
    "value": 12.27
  },
  {
    "timestamp": 1685618040343,
    "value": 10.72
  },
  {
    "timestamp": 1685620632343,
    "value": 12.98
  },
  {
    "timestamp": 1685623224343,
    "value": 12.78
  },
  {
    "timestamp": 1685625816343,
    "value": 13.24
  },
  {
    "timestamp": 1685628408343,
    "value": 14.23
  },
  {
    "timestamp": 1685631000343,
    "value": 13.32
  },
  {
    "timestamp": 1685633592343,
    "value": 16.94
  },
  {
    "timestamp": 1685636184343,
    "value": 16.52
  },
  {
    "timestamp": 1685638776343,
    "value": 17.71
  },
  {
    "timestamp": 1685641368343,
    "value": 19.3
  },
  {
    "timestamp": 1685643960343,
    "value": 24.02
  },
  {
    "timestamp": 1685646552343,
    "value": 23.12
  },
  {
    "timestamp": 1685649144343,
    "value": 27.51
  },
  {
    "timestamp": 1685651736343,
    "value": 26.74
  },
  {
    "timestamp": 1685654328343,
    "value": 29.48
  },
  {
    "timestamp": 1685656920343,
    "value": 32.18
  },
  {
    "timestamp": 1685659512343,
    "value": 29.8
  },
  {
    "timestamp": 1685662104343,
    "value": 32.02
  },
  {
    "timestamp": 1685664696343,
    "value": 32.33
  },
  {
    "timestamp": 1685667288343,
    "value": 32.89
  },
  {
    "timestamp": 1685669880343,
    "value": 30.55
  },
  {
    "timestamp": 1685672472343,
    "value": 30.44
  },
  {
    "timestamp": 1685675064343,
    "value": 30.72
  },
  {
    "timestamp": 1685677656343,
    "value": 29.1
  },
  {
    "timestamp": 1685680248343,
    "value": 24.74
  },
  {
    "timestamp": 1685682840343,
    "value": 25.92
  },
  {
    "timestamp": 1685685432343,
    "value": 20.31
  },
  {
    "timestamp": 1685688024343,
    "value": 20.32
  },
  {
    "timestamp": 1685690616343,
    "value": 17.22
  },
  {
    "timestamp": 1685693208343,
    "value": 16.28
  },
  {
    "timestamp": 1685695800343,
    "value": 16.26
  },
  {
    "timestamp": 1685698392343,
    "value": 12.05
  },
  {
    "timestamp": 1685700984343,
    "value": 11.98
  },
  {
    "timestamp": 1685703576343,
    "value": 11.98
  },
  {
    "timestamp": 1685706168343,
    "value": 13.16
  },
  {
    "timestamp": 1685708760343,
    "value": 13.24
  },
  {
    "timestamp": 1685711352343,
    "value": 14.84
  },
  {
    "timestamp": 1685713944343,
    "value": 16.17
  },
  {
    "timestamp": 1685716536343,
    "value": 19.13
  },
  {
    "timestamp": 1685719128343,
    "value": 19.44
  },
  {
    "timestamp": 1685721720343,
    "value": 22.61
  },
  {
    "timestamp": 1685724312343,
    "value": 24.56
  },
  {
    "timestamp": 1685726904343,
    "value": 26.56
  },
  {
    "timestamp": 1685729496343,
    "value": 29.67
  },
  {
    "timestamp": 1685732088343,
    "value": 29.12
  },
  {
    "timestamp": 1685734680343,
    "value": 32.01
  },
  {
    "timestamp": 1685737272343,
    "value": 30.95
  },
  {
    "timestamp": 1685739864343,
    "value": 34.29
  },
  {
    "timestamp": 1685742456343,
    "value": 32.84
  },
  {
    "timestamp": 1685745048343,
    "value": 32.57
  },
  {
    "timestamp": 1685747640343,
    "value": 31.17
  },
  {
    "timestamp": 1685750232343,
    "value": 28.69
  },
  {
    "timestamp": 1685752824343,
    "value": 28.08
  },
  {
    "timestamp": 1685755416343,
    "value": 27.53
  },
  {
    "timestamp": 1685758008343,
    "value": 25.06
  },
  {
    "timestamp": 1685760600343,
    "value": 25.14
  },
  {
    "timestamp": 1685763192343,
    "value": 20.05
  },
  {
    "timestamp": 1685765784343,
    "value": 18.97
  },
  {
    "timestamp": 1685768376343,
    "value": 19.4
  },
  {
    "timestamp": 1685770968343,
    "value": 14.62
  },
  {
    "timestamp": 1685773560343,
    "value": 16.58
  },
  {
    "timestamp": 1685776152343,
    "value": 13.24
  },
  {
    "timestamp": 1685778744343,
    "value": 11.21
  },
  {
    "timestamp": 1685781336343,
    "value": 11.99
  },
  {
    "timestamp": 1685783928343,
    "value": 9.74
  },
  {
    "timestamp": 1685786520343,
    "value": 10.37
  },
  {
    "timestamp": 1685789112343,
    "value": 12.01
  },
  {
    "timestamp": 1685791704343,
    "value": 12.52
  },
  {
    "timestamp": 1685794296343,
    "value": 13.46
  },
  {
    "timestamp": 1685796888343,
    "value": 14.91
  },
  {
    "timestamp": 1685799480343,
    "value": 18.01
  },
  {
    "timestamp": 1685802072343,
    "value": 20.14
  },
  {
    "timestamp": 1685804664343,
    "value": 22.44
  },
  {
    "timestamp": 1685807256343,
    "value": 23.42
  },
  {
    "timestamp": 1685809848343,
    "value": 24.48
  },
  {
    "timestamp": 1685812440343,
    "value": 28.12
  },
  {
    "timestamp": 1685815032343,
    "value": 29.9
  },
  {
    "timestamp": 1685817624343,
    "value": 28.5
  },
  {
    "timestamp": 1685820216343,
    "value": 28.97
  },
  {
    "timestamp": 1685822808343,
    "value": 32.16
  },
  {
    "timestamp": 1685825400343,
    "value": 32.07
  },
  {
    "timestamp": 1685827992343,
    "value": 34.26
  },
  {
    "timestamp": 1685830584343,
    "value": 31.13
  },
  {
    "timestamp": 1685833176343,
    "value": 31.57
  },
  {
    "timestamp": 1685835768343,
    "value": 30.98
  },
  {
    "timestamp": 1685838360343,
    "value": 30.63
  },
  {
    "timestamp": 1685840952343,
    "value": 29.8
  },
  {
    "timestamp": 1685843544343,
    "value": 32.33
  },
  {
    "timestamp": 1685846136343,
    "value": 28.33
  },
  {
    "timestamp": 1685848728343,
    "value": 29.77
  },
  {
    "timestamp": 1685851320343,
    "value": 28.87
  },
  {
    "timestamp": 1685853912343,
    "value": 26.3
  },
  {
    "timestamp": 1685856504343,
    "value": 24.76
  },
  {
    "timestamp": 1685859096343,
    "value": 19.74
  },
  {
    "timestamp": 1685861688343,
    "value": 20.38
  },
  {
    "timestamp": 1685864280343,
    "value": 18.78
  },
  {
    "timestamp": 1685866872343,
    "value": 17.38
  },
  {
    "timestamp": 1685869464343,
    "value": 14.31
  },
  {
    "timestamp": 1685872056343,
    "value": 13.75
  },
  {
    "timestamp": 1685874648343,
    "value": 13.13
  },
  {
    "timestamp": 1685877240343,
    "value": 12.49
  },
  {
    "timestamp": 1685879832343,
    "value": 10.46
  },
  {
    "timestamp": 1685882424343,
    "value": 10.46
  },
  {
    "timestamp": 1685885016343,
    "value": 11.41
  },
  {
    "timestamp": 1685887608343,
    "value": 11.61
  },
  {
    "timestamp": 1685890200343,
    "value": 15.84
  },
  {
    "timestamp": 1685892792343,
    "value": 16.31
  },
  {
    "timestamp": 1685895384343,
    "value": 18.34
  },
  {
    "timestamp": 1685897976343,
    "value": 17.54
  },
  {
    "timestamp": 1685900568343,
    "value": 21.28
  },
  {
    "timestamp": 1685903160343,
    "value": 24.42
  },
  {
    "timestamp": 1685905752343,
    "value": 24.2
  },
  {
    "timestamp": 1685908344343,
    "value": 27.16
  },
  {
    "timestamp": 1685910936343,
    "value": 27.67
  },
  {
    "timestamp": 1685913528343,
    "value": 28.22
  },
  {
    "timestamp": 1685916120343,
    "value": 29.59
  },
  {
    "timestamp": 1685918712343,
    "value": 32.81
  },
  {
    "timestamp": 1685921304343,
    "value": 33.51
  },
  {
    "timestamp": 1685923896343,
    "value": 31.15
  },
  {
    "timestamp": 1685926488343,
    "value": 33.58
  },
  {
    "timestamp": 1685929080343,
    "value": 32.73
  },
  {
    "timestamp": 1685931672343,
    "value": 31.2
  },
  {
    "timestamp": 1685934264343,
    "value": 28.93
  },
  {
    "timestamp": 1685936856343,
    "value": 31.13
  },
  {
    "timestamp": 1685939448343,
    "value": 29.35
  },
  {
    "timestamp": 1685942040343,
    "value": 26.45
  },
  {
    "timestamp": 1685944632343,
    "value": 26.81
  },
  {
    "timestamp": 1685947224343,
    "value": 24.17
  },
  {
    "timestamp": 1685949816343,
    "value": 24.46
  },
  {
    "timestamp": 1685952408343,
    "value": 22.66
  },
  {
    "timestamp": 1685955000343,
    "value": 23.19
  },
  {
    "timestamp": 1685957592343,
    "value": 21.76
  },
  {
    "timestamp": 1685960184343,
    "value": 19.49
  },
  {
    "timestamp": 1685962776343,
    "value": 18.57
  },
  {
    "timestamp": 1685965368343,
    "value": 16.15
  },
  {
    "timestamp": 1685967960343,
    "value": 16.95
  },
  {
    "timestamp": 1685970552343,
    "value": 15.34
  },
  {
    "timestamp": 1685973144343,
    "value": 12.93
  },
  {
    "timestamp": 1685975736343,
    "value": 14.66
  },
  {
    "timestamp": 1685978328343,
    "value": 12.27
  },
  {
    "timestamp": 1685980920343,
    "value": 15.65
  },
  {
    "timestamp": 1685983512343,
    "value": 14.45
  },
  {
    "timestamp": 1685986104343,
    "value": 14.14
  },
  {
    "timestamp": 1685988696343,
    "value": 17.53
  },
  {
    "timestamp": 1685991288343,
    "value": 19.05
  },
  {
    "timestamp": 1685993880343,
    "value": 18.64
  },
  {
    "timestamp": 1685996472343,
    "value": 23.07
  },
  {
    "timestamp": 1685999064343,
    "value": 25.07
  },
  {
    "timestamp": 1686001656343,
    "value": 26.26
  },
  {
    "timestamp": 1686004248343,
    "value": 26.32
  },
  {
    "timestamp": 1686006840343,
    "value": 28.55
  },
  {
    "timestamp": 1686009432343,
    "value": 28.13
  },
  {
    "timestamp": 1686012024343,
    "value": 27.84
  },
  {
    "timestamp": 1686014616343,
    "value": 30.1
  },
  {
    "timestamp": 1686017208343,
    "value": 28.69
  },
  {
    "timestamp": 1686019800343,
    "value": 31.17
  },
  {
    "timestamp": 1686022392343,
    "value": 28
  },
  {
    "timestamp": 1686024984343,
    "value": 30.9
  },
  {
    "timestamp": 1686027576343,
    "value": 29.32
  },
  {
    "timestamp": 1686030168343,
    "value": 28.44
  },
  {
    "timestamp": 1686032760343,
    "value": 27.41
  },
  {
    "timestamp": 1686035352343,
    "value": 25.51
  },
  {
    "timestamp": 1686037944343,
    "value": 23.86
  },
  {
    "timestamp": 1686040536343,
    "value": 23.8
  },
  {
    "timestamp": 1686043128343,
    "value": 20.01
  },
  {
    "timestamp": 1686045720343,
    "value": 19.51
  },
  {
    "timestamp": 1686048312343,
    "value": 19.37
  },
  {
    "timestamp": 1686050904343,
    "value": 17.61
  },
  {
    "timestamp": 1686053496343,
    "value": 14.12
  },
  {
    "timestamp": 1686056088343,
    "value": 15
  },
  {
    "timestamp": 1686058680343,
    "value": 12.75
  },
  {
    "timestamp": 1686061272343,
    "value": 15.18
  },
  {
    "timestamp": 1686063864343,
    "value": 12.37
  },
  {
    "timestamp": 1686066456343,
    "value": 15.98
  },
  {
    "timestamp": 1686069048343,
    "value": 14.55
  },
  {
    "timestamp": 1686071640343,
    "value": 16.52
  },
  {
    "timestamp": 1686074232343,
    "value": 20.91
  },
  {
    "timestamp": 1686076824343,
    "value": 23.49
  },
  {
    "timestamp": 1686079416343,
    "value": 24.94
  },
  {
    "timestamp": 1686082008343,
    "value": 26.41
  },
  {
    "timestamp": 1686084600343,
    "value": 29.37
  },
  {
    "timestamp": 1686087192343,
    "value": 31.2
  },
  {
    "timestamp": 1686089784343,
    "value": 29.04
  },
  {
    "timestamp": 1686092376343,
    "value": 33.21
  },
  {
    "timestamp": 1686094968343,
    "value": 32.14
  },
  {
    "timestamp": 1686097560343,
    "value": 31.83
  },
  {
    "timestamp": 1686100152343,
    "value": 29.8
  },
  {
    "timestamp": 1686102744343,
    "value": 31.25
  },
  {
    "timestamp": 1686105336343,
    "value": 27.85
  },
  {
    "timestamp": 1686107928343,
    "value": 29.13
  },
  {
    "timestamp": 1686110520343,
    "value": 28.54
  },
  {
    "timestamp": 1686113112343,
    "value": 24.16
  },
  {
    "timestamp": 1686115704343,
    "value": 24.2
  },
  {
    "timestamp": 1686118296343,
    "value": 20.06
  },
  {
    "timestamp": 1686120888343,
    "value": 19.47
  },
  {
    "timestamp": 1686123480343,
    "value": 16.49
  },
  {
    "timestamp": 1686126072343,
    "value": 16.41
  },
  {
    "timestamp": 1686128664343,
    "value": 13.65
  },
  {
    "timestamp": 1686131256343,
    "value": 15.22
  },
  {
    "timestamp": 1686133848343,
    "value": 13.17
  },
  {
    "timestamp": 1686136440343,
    "value": 14.19
  },
  {
    "timestamp": 1686139032343,
    "value": 13.72
  },
  {
    "timestamp": 1686141624343,
    "value": 13.35
  },
  {
    "timestamp": 1686144216343,
    "value": 11.43
  },
  {
    "timestamp": 1686146808343,
    "value": 14.03
  },
  {
    "timestamp": 1686149400343,
    "value": 14.27
  },
  {
    "timestamp": 1686151992343,
    "value": 17.91
  },
  {
    "timestamp": 1686154584343,
    "value": 19.59
  },
  {
    "timestamp": 1686157176343,
    "value": 21.38
  },
  {
    "timestamp": 1686159768343,
    "value": 21.61
  },
  {
    "timestamp": 1686162360343,
    "value": 23.87
  },
  {
    "timestamp": 1686164952343,
    "value": 24.08
  },
  {
    "timestamp": 1686167544343,
    "value": 25.74
  },
  {
    "timestamp": 1686170136343,
    "value": 28.62
  },
  {
    "timestamp": 1686172728343,
    "value": 29.55
  },
  {
    "timestamp": 1686175320343,
    "value": 29.45
  },
  {
    "timestamp": 1686177912343,
    "value": 33.16
  },
  {
    "timestamp": 1686180504343,
    "value": 30.27
  },
  {
    "timestamp": 1686183096343,
    "value": 32.01
  },
  {
    "timestamp": 1686185688343,
    "value": 32.21
  },
  {
    "timestamp": 1686188280343,
    "value": 30.44
  },
  {
    "timestamp": 1686190872343,
    "value": 28.59
  },
  {
    "timestamp": 1686193464343,
    "value": 28.82
  },
  {
    "timestamp": 1686196056343,
    "value": 27.12
  },
  {
    "timestamp": 1686198648343,
    "value": 27.69
  },
  {
    "timestamp": 1686201240343,
    "value": 22.9
  },
  {
    "timestamp": 1686203832343,
    "value": 20.57
  },
  {
    "timestamp": 1686206424343,
    "value": 20.2
  },
  {
    "timestamp": 1686209016343,
    "value": 19.1
  },
  {
    "timestamp": 1686211608343,
    "value": 15.42
  },
  {
    "timestamp": 1686214200343,
    "value": 13.72
  },
  {
    "timestamp": 1686216792343,
    "value": 15.2
  },
  {
    "timestamp": 1686219384343,
    "value": 11.69
  },
  {
    "timestamp": 1686221976343,
    "value": 11.99
  },
  {
    "timestamp": 1686224568343,
    "value": 13.55
  },
  {
    "timestamp": 1686227160343,
    "value": 13.6
  },
  {
    "timestamp": 1686229752343,
    "value": 12.79
  },
  {
    "timestamp": 1686232344343,
    "value": 12.11
  },
  {
    "timestamp": 1686234936343,
    "value": 15.98
  },
  {
    "timestamp": 1686237528343,
    "value": 15.77
  },
  {
    "timestamp": 1686240120343,
    "value": 17.21
  },
  {
    "timestamp": 1686242712343,
    "value": 19.78
  },
  {
    "timestamp": 1686245304343,
    "value": 21.59
  },
  {
    "timestamp": 1686247896343,
    "value": 23.86
  },
  {
    "timestamp": 1686250488343,
    "value": 25.92
  },
  {
    "timestamp": 1686253080343,
    "value": 27.43
  },
  {
    "timestamp": 1686255672343,
    "value": 26.38
  },
  {
    "timestamp": 1686258264343,
    "value": 29.95
  },
  {
    "timestamp": 1686260856343,
    "value": 31.6
  },
  {
    "timestamp": 1686263448343,
    "value": 30.42
  },
  {
    "timestamp": 1686266040343,
    "value": 30.6
  },
  {
    "timestamp": 1686268632343,
    "value": 30.89
  },
  {
    "timestamp": 1686271224343,
    "value": 30.33
  },
  {
    "timestamp": 1686273816343,
    "value": 30.76
  },
  {
    "timestamp": 1686276408343,
    "value": 29.03
  },
  {
    "timestamp": 1686279000343,
    "value": 30.05
  },
  {
    "timestamp": 1686281592343,
    "value": 28.04
  },
  {
    "timestamp": 1686284184343,
    "value": 24.64
  },
  {
    "timestamp": 1686286776343,
    "value": 26.53
  },
  {
    "timestamp": 1686289368343,
    "value": 21.07
  },
  {
    "timestamp": 1686291960343,
    "value": 20.72
  },
  {
    "timestamp": 1686294552343,
    "value": 17.54
  },
  {
    "timestamp": 1686297144343,
    "value": 18.52
  },
  {
    "timestamp": 1686299736343,
    "value": 16.89
  },
  {
    "timestamp": 1686302328343,
    "value": 13.33
  },
  {
    "timestamp": 1686304920343,
    "value": 15.19
  },
  {
    "timestamp": 1686307512343,
    "value": 11.95
  },
  {
    "timestamp": 1686310104343,
    "value": 10.36
  },
  {
    "timestamp": 1686312696343,
    "value": 13.23
  },
  {
    "timestamp": 1686315288343,
    "value": 13.1
  },
  {
    "timestamp": 1686317880343,
    "value": 11.96
  },
  {
    "timestamp": 1686320472343,
    "value": 13.2
  },
  {
    "timestamp": 1686323064343,
    "value": 15.85
  },
  {
    "timestamp": 1686325656343,
    "value": 15.08
  },
  {
    "timestamp": 1686328248343,
    "value": 18.54
  },
  {
    "timestamp": 1686330840343,
    "value": 20.03
  },
  {
    "timestamp": 1686333432343,
    "value": 22.99
  },
  {
    "timestamp": 1686336024343,
    "value": 27.06
  },
  {
    "timestamp": 1686338616343,
    "value": 29.89
  },
  {
    "timestamp": 1686341208343,
    "value": 31.33
  },
  {
    "timestamp": 1686343800343,
    "value": 34.97
  },
  {
    "timestamp": 1686346392343,
    "value": 33.55
  },
  {
    "timestamp": 1686348984343,
    "value": 36.03
  },
  {
    "timestamp": 1686351576343,
    "value": 39.31
  },
  {
    "timestamp": 1686354168343,
    "value": 36.07
  },
  {
    "timestamp": 1686356760343,
    "value": 37.53
  },
  {
    "timestamp": 1686359352343,
    "value": 37.17
  },
  {
    "timestamp": 1686361944343,
    "value": 35.69
  },
  {
    "timestamp": 1686364536343,
    "value": 35.11
  },
  {
    "timestamp": 1686367128343,
    "value": 33.09
  },
  {
    "timestamp": 1686369720343,
    "value": 28.84
  },
  {
    "timestamp": 1686372312343,
    "value": 25.3
  },
  {
    "timestamp": 1686374904343,
    "value": 23.75
  },
  {
    "timestamp": 1686377496343,
    "value": 21.04
  },
  {
    "timestamp": 1686380088343,
    "value": 16.89
  },
  {
    "timestamp": 1686382680343,
    "value": 13.44
  },
  {
    "timestamp": 1686385272343,
    "value": 11.66
  },
  {
    "timestamp": 1686387864343,
    "value": 11.03
  },
  {
    "timestamp": 1686390456343,
    "value": 7.41
  },
  {
    "timestamp": 1686393048343,
    "value": 8.35
  },
  {
    "timestamp": 1686395640343,
    "value": 7.36
  },
  {
    "timestamp": 1686398232343,
    "value": 4.6
  },
  {
    "timestamp": 1686400824343,
    "value": 6.75
  },
  {
    "timestamp": 1686403416343,
    "value": 8.03
  },
  {
    "timestamp": 1686406008343,
    "value": 9.31
  },
  {
    "timestamp": 1686408600343,
    "value": 9.9
  },
  {
    "timestamp": 1686411192343,
    "value": 12.74
  },
  {
    "timestamp": 1686413784343,
    "value": 16.09
  },
  {
    "timestamp": 1686416376343,
    "value": 20.89
  },
  {
    "timestamp": 1686418968343,
    "value": 21.76
  },
  {
    "timestamp": 1686421560343,
    "value": 25.63
  },
  {
    "timestamp": 1686424152343,
    "value": 27.7
  },
  {
    "timestamp": 1686426744343,
    "value": 30.51
  },
  {
    "timestamp": 1686429336343,
    "value": 32.09
  },
  {
    "timestamp": 1686431928343,
    "value": 33.44
  },
  {
    "timestamp": 1686434520343,
    "value": 37.4
  },
  {
    "timestamp": 1686437112343,
    "value": 35.58
  },
  {
    "timestamp": 1686439704343,
    "value": 36.08
  },
  {
    "timestamp": 1686442296343,
    "value": 38.59
  },
  {
    "timestamp": 1686444888343,
    "value": 37.96
  },
  {
    "timestamp": 1686447480343,
    "value": 36.95
  },
  {
    "timestamp": 1686450072343,
    "value": 34.3
  },
  {
    "timestamp": 1686452664343,
    "value": 32.67
  },
  {
    "timestamp": 1686455256343,
    "value": 28.32
  },
  {
    "timestamp": 1686457848343,
    "value": 26.68
  },
  {
    "timestamp": 1686460440343,
    "value": 22.19
  },
  {
    "timestamp": 1686463032343,
    "value": 21.46
  },
  {
    "timestamp": 1686465624343,
    "value": 21.37
  },
  {
    "timestamp": 1686468216343,
    "value": 20.33
  },
  {
    "timestamp": 1686470808343,
    "value": 14.78
  },
  {
    "timestamp": 1686473400343,
    "value": 16.12
  },
  {
    "timestamp": 1686475992343,
    "value": 16.69
  },
  {
    "timestamp": 1686478584343,
    "value": 15.47
  },
  {
    "timestamp": 1686481176343,
    "value": 17.81
  },
  {
    "timestamp": 1686483768343,
    "value": 17.37
  },
  {
    "timestamp": 1686486360343,
    "value": 19.04
  },
  {
    "timestamp": 1686488952343,
    "value": 16.73
  },
  {
    "timestamp": 1686491544343,
    "value": 17.66
  },
  {
    "timestamp": 1686494136343,
    "value": 20.42
  },
  {
    "timestamp": 1686496728343,
    "value": 19.57
  },
  {
    "timestamp": 1686499320343,
    "value": 21.56
  },
  {
    "timestamp": 1686501912343,
    "value": 21.78
  },
  {
    "timestamp": 1686504504343,
    "value": 26.26
  },
  {
    "timestamp": 1686507096343,
    "value": 27.48
  },
  {
    "timestamp": 1686509688343,
    "value": 25.3
  },
  {
    "timestamp": 1686512280343,
    "value": 26.15
  },
  {
    "timestamp": 1686514872343,
    "value": 27.84
  },
  {
    "timestamp": 1686517464343,
    "value": 25.83
  },
  {
    "timestamp": 1686520056343,
    "value": 28.78
  },
  {
    "timestamp": 1686522648343,
    "value": 28.7
  },
  {
    "timestamp": 1686525240343,
    "value": 25.57
  },
  {
    "timestamp": 1686527832343,
    "value": 24.9
  },
  {
    "timestamp": 1686530424343,
    "value": 27.04
  },
  {
    "timestamp": 1686533016343,
    "value": 26.34
  },
  {
    "timestamp": 1686535608343,
    "value": 25.94
  },
  {
    "timestamp": 1686538200343,
    "value": 21.51
  },
  {
    "timestamp": 1686540792343,
    "value": 20.51
  },
  {
    "timestamp": 1686543384343,
    "value": 20.48
  },
  {
    "timestamp": 1686545976343,
    "value": 20.96
  },
  {
    "timestamp": 1686548568343,
    "value": 17.24
  },
  {
    "timestamp": 1686551160343,
    "value": 19.17
  },
  {
    "timestamp": 1686553752343,
    "value": 16.38
  },
  {
    "timestamp": 1686556344343,
    "value": 18.73
  },
  {
    "timestamp": 1686558936343,
    "value": 15.47
  },
  {
    "timestamp": 1686561528343,
    "value": 15.01
  },
  {
    "timestamp": 1686564120343,
    "value": 15.56
  },
  {
    "timestamp": 1686566712343,
    "value": 16.77
  },
  {
    "timestamp": 1686569304343,
    "value": 17.58
  },
  {
    "timestamp": 1686571896343,
    "value": 17.08
  },
  {
    "timestamp": 1686574488343,
    "value": 17.48
  },
  {
    "timestamp": 1686577080343,
    "value": 19.6
  },
  {
    "timestamp": 1686579672343,
    "value": 21.55
  },
  {
    "timestamp": 1686582264343,
    "value": 19.12
  },
  {
    "timestamp": 1686584856343,
    "value": 21.18
  },
  {
    "timestamp": 1686587448343,
    "value": 24.51
  },
  {
    "timestamp": 1686590040343,
    "value": 24.12
  },
  {
    "timestamp": 1686592632343,
    "value": 25.91
  },
  {
    "timestamp": 1686595224343,
    "value": 24.34
  },
  {
    "timestamp": 1686597816343,
    "value": 27.29
  },
  {
    "timestamp": 1686600408343,
    "value": 27.7
  },
  {
    "timestamp": 1686603000343,
    "value": 26.76
  },
  {
    "timestamp": 1686605592343,
    "value": 29.33
  },
  {
    "timestamp": 1686608184343,
    "value": 26.92
  },
  {
    "timestamp": 1686610776343,
    "value": 26.36
  },
  {
    "timestamp": 1686613368343,
    "value": 25.96
  },
  {
    "timestamp": 1686615960343,
    "value": 25.6
  },
  {
    "timestamp": 1686618552343,
    "value": 25.94
  },
  {
    "timestamp": 1686621144343,
    "value": 24.19
  },
  {
    "timestamp": 1686623736343,
    "value": 24.82
  },
  {
    "timestamp": 1686626328343,
    "value": 22.84
  },
  {
    "timestamp": 1686628920343,
    "value": 21.13
  },
  {
    "timestamp": 1686631512343,
    "value": 22.18
  },
  {
    "timestamp": 1686634104343,
    "value": 18.33
  },
  {
    "timestamp": 1686636696343,
    "value": 18.15
  },
  {
    "timestamp": 1686639288343,
    "value": 17.75
  },
  {
    "timestamp": 1686641880343,
    "value": 17.19
  },
  {
    "timestamp": 1686644472343,
    "value": 14.76
  },
  {
    "timestamp": 1686647064343,
    "value": 14.77
  },
  {
    "timestamp": 1686649656343,
    "value": 14.36
  },
  {
    "timestamp": 1686652248343,
    "value": 13.75
  },
  {
    "timestamp": 1686654840343,
    "value": 10.24
  },
  {
    "timestamp": 1686657432343,
    "value": 10.94
  },
  {
    "timestamp": 1686660024343,
    "value": 12.46
  },
  {
    "timestamp": 1686662616343,
    "value": 10.89
  },
  {
    "timestamp": 1686665208343,
    "value": 12.46
  },
  {
    "timestamp": 1686667800343,
    "value": 16.13
  },
  {
    "timestamp": 1686670392343,
    "value": 16.43
  },
  {
    "timestamp": 1686672984343,
    "value": 19.07
  },
  {
    "timestamp": 1686675576343,
    "value": 19.87
  },
  {
    "timestamp": 1686678168343,
    "value": 19.93
  },
  {
    "timestamp": 1686680760343,
    "value": 23.86
  },
  {
    "timestamp": 1686683352343,
    "value": 25.72
  },
  {
    "timestamp": 1686685944343,
    "value": 24.78
  },
  {
    "timestamp": 1686688536343,
    "value": 28.72
  },
  {
    "timestamp": 1686691128343,
    "value": 30.37
  },
  {
    "timestamp": 1686693720343,
    "value": 28.76
  },
  {
    "timestamp": 1686696312343,
    "value": 29.86
  },
  {
    "timestamp": 1686698904343,
    "value": 32.92
  },
  {
    "timestamp": 1686701496343,
    "value": 30.09
  },
  {
    "timestamp": 1686704088343,
    "value": 30
  },
  {
    "timestamp": 1686706680343,
    "value": 32.53
  },
  {
    "timestamp": 1686709272343,
    "value": 31.52
  },
  {
    "timestamp": 1686711864343,
    "value": 28.47
  },
  {
    "timestamp": 1686714456343,
    "value": 27.35
  },
  {
    "timestamp": 1686717048343,
    "value": 24.49
  },
  {
    "timestamp": 1686719640343,
    "value": 22.16
  },
  {
    "timestamp": 1686722232343,
    "value": 20.44
  },
  {
    "timestamp": 1686724824343,
    "value": 20.84
  },
  {
    "timestamp": 1686727416343,
    "value": 17.83
  },
  {
    "timestamp": 1686730008343,
    "value": 15.99
  },
  {
    "timestamp": 1686732600343,
    "value": 14.27
  },
  {
    "timestamp": 1686735192343,
    "value": 14.21
  },
  {
    "timestamp": 1686737784343,
    "value": 11.9
  },
  {
    "timestamp": 1686740376343,
    "value": 10.9
  },
  {
    "timestamp": 1686742968343,
    "value": 13.12
  },
  {
    "timestamp": 1686745560343,
    "value": 12.52
  },
  {
    "timestamp": 1686748152343,
    "value": 14.63
  },
  {
    "timestamp": 1686750744343,
    "value": 14.34
  },
  {
    "timestamp": 1686753336343,
    "value": 18.61
  },
  {
    "timestamp": 1686755928343,
    "value": 20.76
  },
  {
    "timestamp": 1686758520343,
    "value": 22.43
  },
  {
    "timestamp": 1686761112343,
    "value": 23.83
  },
  {
    "timestamp": 1686763704343,
    "value": 25.4
  },
  {
    "timestamp": 1686766296343,
    "value": 27.99
  },
  {
    "timestamp": 1686768888343,
    "value": 29.66
  },
  {
    "timestamp": 1686771480343,
    "value": 32.67
  },
  {
    "timestamp": 1686774072343,
    "value": 34.15
  },
  {
    "timestamp": 1686776664343,
    "value": 34.26
  },
  {
    "timestamp": 1686779256343,
    "value": 32.3
  },
  {
    "timestamp": 1686781848343,
    "value": 33.51
  },
  {
    "timestamp": 1686784440343,
    "value": 34.23
  },
  {
    "timestamp": 1686787032343,
    "value": 33.19
  },
  {
    "timestamp": 1686789624343,
    "value": 30.16
  },
  {
    "timestamp": 1686792216343,
    "value": 29.96
  },
  {
    "timestamp": 1686794808343,
    "value": 28.02
  },
  {
    "timestamp": 1686797400343,
    "value": 27.62
  },
  {
    "timestamp": 1686799992343,
    "value": 23.65
  },
  {
    "timestamp": 1686802584343,
    "value": 20.04
  },
  {
    "timestamp": 1686805176343,
    "value": 19.4
  },
  {
    "timestamp": 1686807768343,
    "value": 16.75
  },
  {
    "timestamp": 1686810360343,
    "value": 15.55
  },
  {
    "timestamp": 1686812952343,
    "value": 12.68
  },
  {
    "timestamp": 1686815544343,
    "value": 10.8
  },
  {
    "timestamp": 1686818136343,
    "value": 11.84
  },
  {
    "timestamp": 1686820728343,
    "value": 9
  },
  {
    "timestamp": 1686823320343,
    "value": 9
  },
  {
    "timestamp": 1686825912343,
    "value": 8.73
  },
  {
    "timestamp": 1686828504343,
    "value": 11.28
  },
  {
    "timestamp": 1686831096343,
    "value": 12.11
  },
  {
    "timestamp": 1686833688343,
    "value": 13.39
  },
  {
    "timestamp": 1686836280343,
    "value": 13.37
  },
  {
    "timestamp": 1686838872343,
    "value": 15.02
  },
  {
    "timestamp": 1686841464343,
    "value": 17.97
  },
  {
    "timestamp": 1686844056343,
    "value": 21.9
  },
  {
    "timestamp": 1686846648343,
    "value": 22.15
  },
  {
    "timestamp": 1686849240343,
    "value": 26.74
  },
  {
    "timestamp": 1686851832343,
    "value": 28.98
  },
  {
    "timestamp": 1686854424343,
    "value": 30.09
  },
  {
    "timestamp": 1686857016343,
    "value": 31.78
  },
  {
    "timestamp": 1686859608343,
    "value": 31.16
  },
  {
    "timestamp": 1686862200343,
    "value": 32.46
  },
  {
    "timestamp": 1686864792343,
    "value": 32.86
  },
  {
    "timestamp": 1686867384343,
    "value": 34.3
  },
  {
    "timestamp": 1686869976343,
    "value": 33.99
  },
  {
    "timestamp": 1686872568343,
    "value": 33.84
  },
  {
    "timestamp": 1686875160343,
    "value": 33.91
  },
  {
    "timestamp": 1686877752343,
    "value": 30.49
  },
  {
    "timestamp": 1686880344343,
    "value": 30.77
  },
  {
    "timestamp": 1686882936343,
    "value": 27.02
  },
  {
    "timestamp": 1686885528343,
    "value": 25.41
  },
  {
    "timestamp": 1686888120343,
    "value": 22.8
  },
  {
    "timestamp": 1686890712343,
    "value": 22.32
  },
  {
    "timestamp": 1686893304343,
    "value": 18.3
  },
  {
    "timestamp": 1686895896343,
    "value": 16.47
  },
  {
    "timestamp": 1686898488343,
    "value": 14.78
  },
  {
    "timestamp": 1686901080343,
    "value": 11.03
  },
  {
    "timestamp": 1686903672343,
    "value": 10.63
  },
  {
    "timestamp": 1686906264343,
    "value": 11.17
  },
  {
    "timestamp": 1686908856343,
    "value": 10.76
  },
  {
    "timestamp": 1686911448343,
    "value": 9.72
  },
  {
    "timestamp": 1686914040343,
    "value": 10.88
  },
  {
    "timestamp": 1686916632343,
    "value": 12.08
  },
  {
    "timestamp": 1686919224343,
    "value": 11.67
  },
  {
    "timestamp": 1686921816343,
    "value": 12.14
  },
  {
    "timestamp": 1686924408343,
    "value": 17.63
  },
  {
    "timestamp": 1686927000343,
    "value": 19.53
  },
  {
    "timestamp": 1686929592343,
    "value": 20.69
  },
  {
    "timestamp": 1686932184343,
    "value": 24
  },
  {
    "timestamp": 1686934776343,
    "value": 22.32
  },
  {
    "timestamp": 1686937368343,
    "value": 26.3
  },
  {
    "timestamp": 1686939960343,
    "value": 28.86
  },
  {
    "timestamp": 1686942552343,
    "value": 28.8
  },
  {
    "timestamp": 1686945144343,
    "value": 32.45
  },
  {
    "timestamp": 1686947736343,
    "value": 33.79
  },
  {
    "timestamp": 1686950328343,
    "value": 32.33
  },
  {
    "timestamp": 1686952920343,
    "value": 32.85
  },
  {
    "timestamp": 1686955512343,
    "value": 32.83
  },
  {
    "timestamp": 1686958104343,
    "value": 32.31
  },
  {
    "timestamp": 1686960696343,
    "value": 31.1
  },
  {
    "timestamp": 1686963288343,
    "value": 32.53
  },
  {
    "timestamp": 1686965880343,
    "value": 30.22
  },
  {
    "timestamp": 1686968472343,
    "value": 28.45
  },
  {
    "timestamp": 1686971064343,
    "value": 29.13
  },
  {
    "timestamp": 1686973656343,
    "value": 27.57
  },
  {
    "timestamp": 1686976248343,
    "value": 26.4
  },
  {
    "timestamp": 1686978840343,
    "value": 25.17
  },
  {
    "timestamp": 1686981432343,
    "value": 20.73
  },
  {
    "timestamp": 1686984024343,
    "value": 22.18
  },
  {
    "timestamp": 1686986616343,
    "value": 18.01
  },
  {
    "timestamp": 1686989208343,
    "value": 17.05
  },
  {
    "timestamp": 1686991800343,
    "value": 14.12
  },
  {
    "timestamp": 1686994392343,
    "value": 13.62
  },
  {
    "timestamp": 1686996984343,
    "value": 12.92
  },
  {
    "timestamp": 1686999576343,
    "value": 10.48
  },
  {
    "timestamp": 1687002168343,
    "value": 10.52
  },
  {
    "timestamp": 1687004760343,
    "value": 13.33
  },
  {
    "timestamp": 1687007352343,
    "value": 14.24
  },
  {
    "timestamp": 1687009944343,
    "value": 14
  },
  {
    "timestamp": 1687012536343,
    "value": 15.14
  },
  {
    "timestamp": 1687015128343,
    "value": 15.93
  },
  {
    "timestamp": 1687017720343,
    "value": 18.74
  },
  {
    "timestamp": 1687020312343,
    "value": 18.79
  },
  {
    "timestamp": 1687022904343,
    "value": 19.45
  },
  {
    "timestamp": 1687025496343,
    "value": 20.68
  },
  {
    "timestamp": 1687028088343,
    "value": 22.57
  },
  {
    "timestamp": 1687030680343,
    "value": 26.01
  },
  {
    "timestamp": 1687033272343,
    "value": 28.27
  },
  {
    "timestamp": 1687035864343,
    "value": 28.14
  },
  {
    "timestamp": 1687038456343,
    "value": 32.19
  },
  {
    "timestamp": 1687041048343,
    "value": 32.19
  },
  {
    "timestamp": 1687043640343,
    "value": 30.31
  },
  {
    "timestamp": 1687046232343,
    "value": 30.3
  },
  {
    "timestamp": 1687048824343,
    "value": 31.7
  },
  {
    "timestamp": 1687051416343,
    "value": 30.91
  },
  {
    "timestamp": 1687054008343,
    "value": 29.86
  },
  {
    "timestamp": 1687056600343,
    "value": 31.01
  },
  {
    "timestamp": 1687059192343,
    "value": 28.33
  },
  {
    "timestamp": 1687061784343,
    "value": 28.25
  },
  {
    "timestamp": 1687064376343,
    "value": 25.23
  },
  {
    "timestamp": 1687066968343,
    "value": 24.55
  },
  {
    "timestamp": 1687069560343,
    "value": 21.82
  },
  {
    "timestamp": 1687072152343,
    "value": 19.25
  },
  {
    "timestamp": 1687074744343,
    "value": 19.15
  },
  {
    "timestamp": 1687077336343,
    "value": 16.18
  },
  {
    "timestamp": 1687079928343,
    "value": 17.93
  },
  {
    "timestamp": 1687082520343,
    "value": 18.71
  },
  {
    "timestamp": 1687085112343,
    "value": 16.97
  },
  {
    "timestamp": 1687087704343,
    "value": 17.91
  },
  {
    "timestamp": 1687090296343,
    "value": 17.61
  },
  {
    "timestamp": 1687092888343,
    "value": 20.32
  },
  {
    "timestamp": 1687095480343,
    "value": 19.66
  },
  {
    "timestamp": 1687098072343,
    "value": 18.98
  },
  {
    "timestamp": 1687100664343,
    "value": 20.92
  },
  {
    "timestamp": 1687103256343,
    "value": 24.16
  },
  {
    "timestamp": 1687105848343,
    "value": 25.03
  },
  {
    "timestamp": 1687108440343,
    "value": 24.28
  },
  {
    "timestamp": 1687111032343,
    "value": 26.92
  },
  {
    "timestamp": 1687113624343,
    "value": 25.26
  },
  {
    "timestamp": 1687116216343,
    "value": 24.72
  },
  {
    "timestamp": 1687118808343,
    "value": 26.89
  },
  {
    "timestamp": 1687121400343,
    "value": 28.5
  },
  {
    "timestamp": 1687123992343,
    "value": 28.3
  },
  {
    "timestamp": 1687126584343,
    "value": 26.4
  },
  {
    "timestamp": 1687129176343,
    "value": 27.9
  },
  {
    "timestamp": 1687131768343,
    "value": 25.34
  },
  {
    "timestamp": 1687134360343,
    "value": 27.1
  },
  {
    "timestamp": 1687136952343,
    "value": 25.89
  },
  {
    "timestamp": 1687139544343,
    "value": 21.78
  },
  {
    "timestamp": 1687142136343,
    "value": 22.43
  },
  {
    "timestamp": 1687144728343,
    "value": 20.21
  },
  {
    "timestamp": 1687147320343,
    "value": 19.57
  },
  {
    "timestamp": 1687149912343,
    "value": 18.56
  },
  {
    "timestamp": 1687152504343,
    "value": 18.43
  },
  {
    "timestamp": 1687155096343,
    "value": 18.88
  },
  {
    "timestamp": 1687157688343,
    "value": 19.01
  },
  {
    "timestamp": 1687160280343,
    "value": 17.5
  },
  {
    "timestamp": 1687162872343,
    "value": 17.83
  },
  {
    "timestamp": 1687165464343,
    "value": 17.18
  },
  {
    "timestamp": 1687168056343,
    "value": 16.04
  },
  {
    "timestamp": 1687170648343,
    "value": 17.38
  },
  {
    "timestamp": 1687173240343,
    "value": 15.81
  },
  {
    "timestamp": 1687175832343,
    "value": 19.28
  },
  {
    "timestamp": 1687178424343,
    "value": 18.13
  },
  {
    "timestamp": 1687181016343,
    "value": 18.03
  },
  {
    "timestamp": 1687183608343,
    "value": 21.7
  },
  {
    "timestamp": 1687186200343,
    "value": 22.18
  },
  {
    "timestamp": 1687188792343,
    "value": 21.09
  },
  {
    "timestamp": 1687191384343,
    "value": 25.38
  },
  {
    "timestamp": 1687193976343,
    "value": 24.25
  },
  {
    "timestamp": 1687196568343,
    "value": 24.99
  },
  {
    "timestamp": 1687199160343,
    "value": 24.9
  },
  {
    "timestamp": 1687201752343,
    "value": 25.03
  },
  {
    "timestamp": 1687204344343,
    "value": 25.81
  },
  {
    "timestamp": 1687206936343,
    "value": 25.88
  },
  {
    "timestamp": 1687209528343,
    "value": 26.51
  },
  {
    "timestamp": 1687212120343,
    "value": 26.06
  },
  {
    "timestamp": 1687214712343,
    "value": 28.18
  },
  {
    "timestamp": 1687217304343,
    "value": 24.29
  },
  {
    "timestamp": 1687219896343,
    "value": 27.31
  },
  {
    "timestamp": 1687222488343,
    "value": 23.47
  },
  {
    "timestamp": 1687225080343,
    "value": 21.98
  },
  {
    "timestamp": 1687227672343,
    "value": 22.65
  },
  {
    "timestamp": 1687230264343,
    "value": 20.25
  },
  {
    "timestamp": 1687232856343,
    "value": 19.2
  },
  {
    "timestamp": 1687235448343,
    "value": 19.35
  },
  {
    "timestamp": 1687238040343,
    "value": 19.13
  },
  {
    "timestamp": 1687240632343,
    "value": 17.77
  },
  {
    "timestamp": 1687243224343,
    "value": 19.51
  },
  {
    "timestamp": 1687245816343,
    "value": 16.88
  },
  {
    "timestamp": 1687248408343,
    "value": 19.04
  },
  {
    "timestamp": 1687251000343,
    "value": 16.09
  },
  {
    "timestamp": 1687253592343,
    "value": 15.51
  },
  {
    "timestamp": 1687256184343,
    "value": 16.57
  },
  {
    "timestamp": 1687258776343,
    "value": 16.82
  },
  {
    "timestamp": 1687261368343,
    "value": 18.15
  },
  {
    "timestamp": 1687263960343,
    "value": 18.31
  },
  {
    "timestamp": 1687266552343,
    "value": 19.63
  },
  {
    "timestamp": 1687269144343,
    "value": 21.52
  },
  {
    "timestamp": 1687271736343,
    "value": 22.24
  },
  {
    "timestamp": 1687274328343,
    "value": 22.54
  },
  {
    "timestamp": 1687276920343,
    "value": 22.17
  },
  {
    "timestamp": 1687279512343,
    "value": 26.02
  },
  {
    "timestamp": 1687282104343,
    "value": 26.81
  },
  {
    "timestamp": 1687284696343,
    "value": 23.81
  },
  {
    "timestamp": 1687287288343,
    "value": 25.03
  },
  {
    "timestamp": 1687289880343,
    "value": 24.86
  },
  {
    "timestamp": 1687292472343,
    "value": 26.98
  },
  {
    "timestamp": 1687295064343,
    "value": 26.84
  },
  {
    "timestamp": 1687297656343,
    "value": 27.21
  },
  {
    "timestamp": 1687300248343,
    "value": 25.96
  },
  {
    "timestamp": 1687302840343,
    "value": 27.18
  },
  {
    "timestamp": 1687305432343,
    "value": 26.78
  },
  {
    "timestamp": 1687308024343,
    "value": 25.39
  },
  {
    "timestamp": 1687310616343,
    "value": 25.35
  },
  {
    "timestamp": 1687313208343,
    "value": 22.68
  },
  {
    "timestamp": 1687315800343,
    "value": 20.7
  },
  {
    "timestamp": 1687318392343,
    "value": 21.72
  },
  {
    "timestamp": 1687320984343,
    "value": 19.4
  },
  {
    "timestamp": 1687323576343,
    "value": 17.72
  },
  {
    "timestamp": 1687326168343,
    "value": 19.48
  },
  {
    "timestamp": 1687328760343,
    "value": 19.39
  },
  {
    "timestamp": 1687331352343,
    "value": 17.51
  },
  {
    "timestamp": 1687333944343,
    "value": 16
  },
  {
    "timestamp": 1687336536343,
    "value": 16.77
  },
  {
    "timestamp": 1687339128343,
    "value": 18.64
  },
  {
    "timestamp": 1687341720343,
    "value": 16.12
  },
  {
    "timestamp": 1687344312343,
    "value": 17.6
  },
  {
    "timestamp": 1687346904343,
    "value": 16.75
  },
  {
    "timestamp": 1687349496343,
    "value": 16.69
  },
  {
    "timestamp": 1687352088343,
    "value": 17.56
  },
  {
    "timestamp": 1687354680343,
    "value": 20.85
  },
  {
    "timestamp": 1687357272343,
    "value": 20.65
  },
  {
    "timestamp": 1687359864343,
    "value": 21.54
  },
  {
    "timestamp": 1687362456343,
    "value": 22.96
  },
  {
    "timestamp": 1687365048343,
    "value": 23.94
  },
  {
    "timestamp": 1687367640343,
    "value": 25.42
  },
  {
    "timestamp": 1687370232343,
    "value": 24.96
  },
  {
    "timestamp": 1687372824343,
    "value": 27.74
  },
  {
    "timestamp": 1687375416343,
    "value": 27.1
  },
  {
    "timestamp": 1687378008343,
    "value": 28.35
  },
  {
    "timestamp": 1687380600343,
    "value": 25.87
  },
  {
    "timestamp": 1687383192343,
    "value": 26.39
  },
  {
    "timestamp": 1687385784343,
    "value": 26.99
  },
  {
    "timestamp": 1687388376343,
    "value": 27.08
  },
  {
    "timestamp": 1687390968343,
    "value": 26.16
  },
  {
    "timestamp": 1687393560343,
    "value": 26.92
  },
  {
    "timestamp": 1687396152343,
    "value": 30.08
  },
  {
    "timestamp": 1687398744343,
    "value": 30.03
  },
  {
    "timestamp": 1687401336343,
    "value": 30.98
  },
  {
    "timestamp": 1687403928343,
    "value": 28.88
  },
  {
    "timestamp": 1687406520343,
    "value": 27.45
  },
  {
    "timestamp": 1687409112343,
    "value": 27.02
  },
  {
    "timestamp": 1687411704343,
    "value": 22.3
  },
  {
    "timestamp": 1687414296343,
    "value": 22.28
  },
  {
    "timestamp": 1687416888343,
    "value": 19.6
  },
  {
    "timestamp": 1687419480343,
    "value": 17.33
  },
  {
    "timestamp": 1687422072343,
    "value": 17.15
  },
  {
    "timestamp": 1687424664343,
    "value": 12.95
  },
  {
    "timestamp": 1687427256343,
    "value": 12.39
  },
  {
    "timestamp": 1687429848343,
    "value": 13.32
  },
  {
    "timestamp": 1687432440343,
    "value": 12.26
  },
  {
    "timestamp": 1687435032343,
    "value": 12.82
  },
  {
    "timestamp": 1687437624343,
    "value": 12.5
  },
  {
    "timestamp": 1687440216343,
    "value": 11.74
  },
  {
    "timestamp": 1687442808343,
    "value": 13.14
  },
  {
    "timestamp": 1687445400343,
    "value": 14.12
  },
  {
    "timestamp": 1687447992343,
    "value": 16.04
  },
  {
    "timestamp": 1687450584343,
    "value": 17.29
  },
  {
    "timestamp": 1687453176343,
    "value": 18.43
  },
  {
    "timestamp": 1687455768343,
    "value": 21.47
  },
  {
    "timestamp": 1687458360343,
    "value": 23.14
  },
  {
    "timestamp": 1687460952343,
    "value": 25.99
  },
  {
    "timestamp": 1687463544343,
    "value": 26.02
  },
  {
    "timestamp": 1687466136343,
    "value": 28.21
  },
  {
    "timestamp": 1687468728343,
    "value": 30.88
  },
  {
    "timestamp": 1687471320343,
    "value": 30.36
  },
  {
    "timestamp": 1687473912343,
    "value": 29.99
  },
  {
    "timestamp": 1687476504343,
    "value": 32.41
  },
  {
    "timestamp": 1687479096343,
    "value": 32.75
  },
  {
    "timestamp": 1687481688343,
    "value": 30.05
  },
  {
    "timestamp": 1687484280343,
    "value": 33
  },
  {
    "timestamp": 1687486872343,
    "value": 28.86
  },
  {
    "timestamp": 1687489464343,
    "value": 27.04
  },
  {
    "timestamp": 1687492056343,
    "value": 28.55
  },
  {
    "timestamp": 1687494648343,
    "value": 25.81
  },
  {
    "timestamp": 1687497240343,
    "value": 23.06
  },
  {
    "timestamp": 1687499832343,
    "value": 23.07
  },
  {
    "timestamp": 1687502424343,
    "value": 20.23
  },
  {
    "timestamp": 1687505016343,
    "value": 19.08
  },
  {
    "timestamp": 1687507608343,
    "value": 18.01
  },
  {
    "timestamp": 1687510200343,
    "value": 14.75
  },
  {
    "timestamp": 1687512792343,
    "value": 14.6
  },
  {
    "timestamp": 1687515384343,
    "value": 11.31
  },
  {
    "timestamp": 1687517976343,
    "value": 10.58
  },
  {
    "timestamp": 1687520568343,
    "value": 13.98
  },
  {
    "timestamp": 1687523160343,
    "value": 12.77
  },
  {
    "timestamp": 1687525752343,
    "value": 11.69
  },
  {
    "timestamp": 1687528344343,
    "value": 13.84
  },
  {
    "timestamp": 1687530936343,
    "value": 13.79
  },
  {
    "timestamp": 1687533528343,
    "value": 16.32
  },
  {
    "timestamp": 1687536120343,
    "value": 16.9
  },
  {
    "timestamp": 1687538712343,
    "value": 18.55
  },
  {
    "timestamp": 1687541304343,
    "value": 21.56
  },
  {
    "timestamp": 1687543896343,
    "value": 23.46
  },
  {
    "timestamp": 1687546488343,
    "value": 23.21
  },
  {
    "timestamp": 1687549080343,
    "value": 24.57
  },
  {
    "timestamp": 1687551672343,
    "value": 29.37
  },
  {
    "timestamp": 1687554264343,
    "value": 31.02
  },
  {
    "timestamp": 1687556856343,
    "value": 31.57
  },
  {
    "timestamp": 1687559448343,
    "value": 30.62
  },
  {
    "timestamp": 1687562040343,
    "value": 30.88
  },
  {
    "timestamp": 1687564632343,
    "value": 32.9
  },
  {
    "timestamp": 1687567224343,
    "value": 30.48
  },
  {
    "timestamp": 1687569816343,
    "value": 29.83
  },
  {
    "timestamp": 1687572408343,
    "value": 32.45
  },
  {
    "timestamp": 1687575000343,
    "value": 31.35
  },
  {
    "timestamp": 1687577592343,
    "value": 27.81
  },
  {
    "timestamp": 1687580184343,
    "value": 27.82
  },
  {
    "timestamp": 1687582776343,
    "value": 26.3
  },
  {
    "timestamp": 1687585368343,
    "value": 22.75
  },
  {
    "timestamp": 1687587960343,
    "value": 20.69
  },
  {
    "timestamp": 1687590552343,
    "value": 18.69
  },
  {
    "timestamp": 1687593144343,
    "value": 16.42
  },
  {
    "timestamp": 1687595736343,
    "value": 16.52
  },
  {
    "timestamp": 1687598328343,
    "value": 14.12
  },
  {
    "timestamp": 1687600920343,
    "value": 12.25
  },
  {
    "timestamp": 1687603512343,
    "value": 10.92
  },
  {
    "timestamp": 1687606104343,
    "value": 12.45
  },
  {
    "timestamp": 1687608696343,
    "value": 13.4
  },
  {
    "timestamp": 1687611288343,
    "value": 11.37
  },
  {
    "timestamp": 1687613880343,
    "value": 11.99
  },
  {
    "timestamp": 1687616472343,
    "value": 15.42
  },
  {
    "timestamp": 1687619064343,
    "value": 15.23
  },
  {
    "timestamp": 1687621656343,
    "value": 16.97
  },
  {
    "timestamp": 1687624248343,
    "value": 20.08
  },
  {
    "timestamp": 1687626840343,
    "value": 18.23
  },
  {
    "timestamp": 1687629432343,
    "value": 23.78
  },
  {
    "timestamp": 1687632024343,
    "value": 24.54
  },
  {
    "timestamp": 1687634616343,
    "value": 24.47
  },
  {
    "timestamp": 1687637208343,
    "value": 27.87
  },
  {
    "timestamp": 1687639800343,
    "value": 30.51
  },
  {
    "timestamp": 1687642392343,
    "value": 30.16
  },
  {
    "timestamp": 1687644984343,
    "value": 32.66
  },
  {
    "timestamp": 1687647576343,
    "value": 32.45
  },
  {
    "timestamp": 1687650168343,
    "value": 32.07
  },
  {
    "timestamp": 1687652760343,
    "value": 33.45
  },
  {
    "timestamp": 1687655352343,
    "value": 33.35
  },
  {
    "timestamp": 1687657944343,
    "value": 30.7
  },
  {
    "timestamp": 1687660536343,
    "value": 28.37
  },
  {
    "timestamp": 1687663128343,
    "value": 29.64
  },
  {
    "timestamp": 1687665720343,
    "value": 26.6
  },
  {
    "timestamp": 1687668312343,
    "value": 24.17
  },
  {
    "timestamp": 1687670904343,
    "value": 23.54
  },
  {
    "timestamp": 1687673496343,
    "value": 22.39
  },
  {
    "timestamp": 1687676088343,
    "value": 18.31
  },
  {
    "timestamp": 1687678680343,
    "value": 16.51
  },
  {
    "timestamp": 1687681272343,
    "value": 16.48
  },
  {
    "timestamp": 1687683864343,
    "value": 16.5
  },
  {
    "timestamp": 1687686456343,
    "value": 15.05
  },
  {
    "timestamp": 1687689048343,
    "value": 14.46
  },
  {
    "timestamp": 1687691640343,
    "value": 12.83
  },
  {
    "timestamp": 1687694232343,
    "value": 12.31
  },
  {
    "timestamp": 1687696824343,
    "value": 13.41
  },
  {
    "timestamp": 1687699416343,
    "value": 11.94
  },
  {
    "timestamp": 1687702008343,
    "value": 12.11
  },
  {
    "timestamp": 1687704600343,
    "value": 13.62
  },
  {
    "timestamp": 1687707192343,
    "value": 17.81
  },
  {
    "timestamp": 1687709784343,
    "value": 15.72
  },
  {
    "timestamp": 1687712376343,
    "value": 21.04
  },
  {
    "timestamp": 1687714968343,
    "value": 19.67
  },
  {
    "timestamp": 1687717560343,
    "value": 23.5
  },
  {
    "timestamp": 1687720152343,
    "value": 26.8
  },
  {
    "timestamp": 1687722744343,
    "value": 24.83
  },
  {
    "timestamp": 1687725336343,
    "value": 29.82
  },
  {
    "timestamp": 1687727928343,
    "value": 27.72
  },
  {
    "timestamp": 1687730520343,
    "value": 32.06
  },
  {
    "timestamp": 1687733112343,
    "value": 30.09
  },
  {
    "timestamp": 1687735704343,
    "value": 30.13
  },
  {
    "timestamp": 1687738296343,
    "value": 30.03
  },
  {
    "timestamp": 1687740888343,
    "value": 32.07
  },
  {
    "timestamp": 1687743480343,
    "value": 32.98
  },
  {
    "timestamp": 1687746072343,
    "value": 30.79
  },
  {
    "timestamp": 1687748664343,
    "value": 29.42
  },
  {
    "timestamp": 1687751256343,
    "value": 29.33
  },
  {
    "timestamp": 1687753848343,
    "value": 27.43
  },
  {
    "timestamp": 1687756440343,
    "value": 22.06
  },
  {
    "timestamp": 1687759032343,
    "value": 23.89
  },
  {
    "timestamp": 1687761624343,
    "value": 19.5
  },
  {
    "timestamp": 1687764216343,
    "value": 17.46
  },
  {
    "timestamp": 1687766808343,
    "value": 17.84
  },
  {
    "timestamp": 1687769400343,
    "value": 16.77
  },
  {
    "timestamp": 1687771992343,
    "value": 13.14
  },
  {
    "timestamp": 1687774584343,
    "value": 12.54
  },
  {
    "timestamp": 1687777176343,
    "value": 10.41
  },
  {
    "timestamp": 1687779768343,
    "value": 10.43
  },
  {
    "timestamp": 1687782360343,
    "value": 14.04
  },
  {
    "timestamp": 1687784952343,
    "value": 10.5
  },
  {
    "timestamp": 1687787544343,
    "value": 11.93
  },
  {
    "timestamp": 1687790136343,
    "value": 13.52
  },
  {
    "timestamp": 1687792728343,
    "value": 16.32
  },
  {
    "timestamp": 1687795320343,
    "value": 16.24
  },
  {
    "timestamp": 1687797912343,
    "value": 19.76
  },
  {
    "timestamp": 1687800504343,
    "value": 22.08
  },
  {
    "timestamp": 1687803096343,
    "value": 21.36
  },
  {
    "timestamp": 1687805688343,
    "value": 26.2
  },
  {
    "timestamp": 1687808280343,
    "value": 25.5
  },
  {
    "timestamp": 1687810872343,
    "value": 29.08
  },
  {
    "timestamp": 1687813464343,
    "value": 30.55
  },
  {
    "timestamp": 1687816056343,
    "value": 31.88
  },
  {
    "timestamp": 1687818648343,
    "value": 29.4
  },
  {
    "timestamp": 1687821240343,
    "value": 30
  },
  {
    "timestamp": 1687823832343,
    "value": 30.18
  },
  {
    "timestamp": 1687826424343,
    "value": 33.09
  },
  {
    "timestamp": 1687829016343,
    "value": 29.75
  },
  {
    "timestamp": 1687831608343,
    "value": 31.81
  },
  {
    "timestamp": 1687834200343,
    "value": 29.7
  },
  {
    "timestamp": 1687836792343,
    "value": 30.46
  },
  {
    "timestamp": 1687839384343,
    "value": 27.41
  },
  {
    "timestamp": 1687841976343,
    "value": 27.12
  },
  {
    "timestamp": 1687844568343,
    "value": 26.81
  },
  {
    "timestamp": 1687847160343,
    "value": 26.08
  },
  {
    "timestamp": 1687849752343,
    "value": 25.66
  },
  {
    "timestamp": 1687852344343,
    "value": 24.39
  },
  {
    "timestamp": 1687854936343,
    "value": 20.13
  },
  {
    "timestamp": 1687857528343,
    "value": 20.18
  },
  {
    "timestamp": 1687860120343,
    "value": 18.54
  },
  {
    "timestamp": 1687862712343,
    "value": 18
  },
  {
    "timestamp": 1687865304343,
    "value": 16.44
  },
  {
    "timestamp": 1687867896343,
    "value": 15.87
  },
  {
    "timestamp": 1687870488343,
    "value": 16.57
  },
  {
    "timestamp": 1687873080343,
    "value": 15.63
  },
  {
    "timestamp": 1687875672343,
    "value": 16.11
  },
  {
    "timestamp": 1687878264343,
    "value": 13.08
  },
  {
    "timestamp": 1687880856343,
    "value": 13.88
  },
  {
    "timestamp": 1687883448343,
    "value": 14.14
  },
  {
    "timestamp": 1687886040343,
    "value": 15.37
  },
  {
    "timestamp": 1687888632343,
    "value": 19.66
  },
  {
    "timestamp": 1687891224343,
    "value": 18.85
  },
  {
    "timestamp": 1687893816343,
    "value": 21.54
  },
  {
    "timestamp": 1687896408343,
    "value": 22.04
  },
  {
    "timestamp": 1687899000343,
    "value": 23.42
  },
  {
    "timestamp": 1687901592343,
    "value": 25.87
  },
  {
    "timestamp": 1687904184343,
    "value": 27.5
  },
  {
    "timestamp": 1687906776343,
    "value": 27.54
  },
  {
    "timestamp": 1687909368343,
    "value": 28.84
  },
  {
    "timestamp": 1687911960343,
    "value": 30.29
  },
  {
    "timestamp": 1687914552343,
    "value": 29.57
  },
  {
    "timestamp": 1687917144343,
    "value": 30.24
  },
  {
    "timestamp": 1687919736343,
    "value": 28.47
  },
  {
    "timestamp": 1687922328343,
    "value": 27.82
  },
  {
    "timestamp": 1687924920343,
    "value": 27.85
  },
  {
    "timestamp": 1687927512343,
    "value": 29.73
  },
  {
    "timestamp": 1687930104343,
    "value": 28.35
  },
  {
    "timestamp": 1687932696343,
    "value": 24.8
  },
  {
    "timestamp": 1687935288343,
    "value": 24.35
  },
  {
    "timestamp": 1687937880343,
    "value": 22.35
  },
  {
    "timestamp": 1687940472343,
    "value": 21.69
  },
  {
    "timestamp": 1687943064343,
    "value": 22.52
  },
  {
    "timestamp": 1687945656343,
    "value": 20.46
  },
  {
    "timestamp": 1687948248343,
    "value": 16.18
  },
  {
    "timestamp": 1687950840343,
    "value": 18.57
  },
  {
    "timestamp": 1687953432343,
    "value": 15.76
  },
  {
    "timestamp": 1687956024343,
    "value": 16.79
  },
  {
    "timestamp": 1687958616343,
    "value": 16.7
  },
  {
    "timestamp": 1687961208343,
    "value": 15.25
  },
  {
    "timestamp": 1687963800343,
    "value": 13.87
  },
  {
    "timestamp": 1687966392343,
    "value": 14.6
  },
  {
    "timestamp": 1687968984343,
    "value": 14.86
  },
  {
    "timestamp": 1687971576343,
    "value": 14.43
  },
  {
    "timestamp": 1687974168343,
    "value": 15.63
  },
  {
    "timestamp": 1687976760343,
    "value": 20.41
  },
  {
    "timestamp": 1687979352343,
    "value": 19
  },
  {
    "timestamp": 1687981944343,
    "value": 21.54
  },
  {
    "timestamp": 1687984536343,
    "value": 21.69
  },
  {
    "timestamp": 1687987128343,
    "value": 24.38
  },
  {
    "timestamp": 1687989720343,
    "value": 25.76
  },
  {
    "timestamp": 1687992312343,
    "value": 28.38
  },
  {
    "timestamp": 1687994904343,
    "value": 27.29
  },
  {
    "timestamp": 1687997496343,
    "value": 29.64
  },
  {
    "timestamp": 1688000088343,
    "value": 29.5
  },
  {
    "timestamp": 1688002680343,
    "value": 31.17
  },
  {
    "timestamp": 1688005272343,
    "value": 28.03
  },
  {
    "timestamp": 1688007864343,
    "value": 29.58
  },
  {
    "timestamp": 1688010456343,
    "value": 29.9
  },
  {
    "timestamp": 1688013048343,
    "value": 26.34
  },
  {
    "timestamp": 1688015640343,
    "value": 27.08
  },
  {
    "timestamp": 1688018232343,
    "value": 27.66
  },
  {
    "timestamp": 1688020824343,
    "value": 25.19
  },
  {
    "timestamp": 1688023416343,
    "value": 22.22
  },
  {
    "timestamp": 1688026008343,
    "value": 23.06
  },
  {
    "timestamp": 1688028600343,
    "value": 21.55
  },
  {
    "timestamp": 1688031192343,
    "value": 18
  },
  {
    "timestamp": 1688033784343,
    "value": 19.69
  },
  {
    "timestamp": 1688036376343,
    "value": 17.1
  },
  {
    "timestamp": 1688038968343,
    "value": 14.72
  },
  {
    "timestamp": 1688041560343,
    "value": 15.15
  },
  {
    "timestamp": 1688044152343,
    "value": 13.94
  },
  {
    "timestamp": 1688046744343,
    "value": 14.22
  },
  {
    "timestamp": 1688049336343,
    "value": 14.6
  },
  {
    "timestamp": 1688051928343,
    "value": 15.07
  },
  {
    "timestamp": 1688054520343,
    "value": 15.28
  },
  {
    "timestamp": 1688057112343,
    "value": 14.88
  },
  {
    "timestamp": 1688059704343,
    "value": 18.84
  },
  {
    "timestamp": 1688062296343,
    "value": 17.94
  },
  {
    "timestamp": 1688064888343,
    "value": 21.28
  },
  {
    "timestamp": 1688067480343,
    "value": 22.4
  },
  {
    "timestamp": 1688070072343,
    "value": 22.36
  },
  {
    "timestamp": 1688072664343,
    "value": 23.6
  },
  {
    "timestamp": 1688075256343,
    "value": 25.03
  },
  {
    "timestamp": 1688077848343,
    "value": 26.54
  },
  {
    "timestamp": 1688080440343,
    "value": 26.33
  },
  {
    "timestamp": 1688083032343,
    "value": 28.95
  },
  {
    "timestamp": 1688085624343,
    "value": 29.37
  },
  {
    "timestamp": 1688088216343,
    "value": 30.88
  },
  {
    "timestamp": 1688090808343,
    "value": 31.35
  },
  {
    "timestamp": 1688093400343,
    "value": 30.57
  },
  {
    "timestamp": 1688095992343,
    "value": 29.82
  },
  {
    "timestamp": 1688098584343,
    "value": 29.31
  },
  {
    "timestamp": 1688101176343,
    "value": 28.33
  },
  {
    "timestamp": 1688103768343,
    "value": 24.65
  },
  {
    "timestamp": 1688106360343,
    "value": 20.85
  },
  {
    "timestamp": 1688108952343,
    "value": 20.32
  },
  {
    "timestamp": 1688111544343,
    "value": 18.26
  },
  {
    "timestamp": 1688114136343,
    "value": 17.71
  },
  {
    "timestamp": 1688116728343,
    "value": 14.83
  },
  {
    "timestamp": 1688119320343,
    "value": 13.27
  },
  {
    "timestamp": 1688121912343,
    "value": 11.75
  },
  {
    "timestamp": 1688124504343,
    "value": 11.62
  },
  {
    "timestamp": 1688127096343,
    "value": 13.88
  }
]
export default data