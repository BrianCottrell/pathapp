/* List of Points to add to a US map */
/* By Brian Cottrell	             */
/* 12-18-2014      		             */

//This lists the x and y coordinates as a percentage of image width
//Points are grouped by state and represent points along the borders
function getPoints(){
	var points =
	[[11.981981981981981,18.1981981981982,0],
	[17.027027027027028,19.27927927927928,0],
	[23.333333333333332,36.21621621621622,0],
	[22.34234234234234,40.18018018018018,0],
	[12.432432432432433,16.486486486486488,1],
	[18.10810810810811,17.92792792792793,1],
	[21.891891891891895,18.46846846846847,1],
	[24.144144144144146,11.441441441441441,1],
	[14.954954954954955,9.00900900900901,1],
	[15.495495495495495,7.4774774774774775,2],
	[25.135135135135133,5.585585585585585,2],
	[24.054054054054056,9.63963963963964,2],
	[26.846846846846844,6.126126126126126,3],
	[25.495495495495497,10.9009009009009,3],
	[23.603603603603602,18.64864864864865,3],
	[27.387387387387385,19.18918918918919,3],
	[31.261261261261264,19.27927927927928,3],
	[31.44144144144144,16.666666666666664,3],
	[28.82882882882883,6.216216216216217,4],
	[42.7027027027027,6.846846846846846,4],
	[42.88288288288288,13.513513513513514,4],
	[31.62162162162162,14.504504504504503,4],
	[18.64864864864865,19.90990990990991,5],
	[22.432432432432435,20.27027027027027,5],
	[26.396396396396398,20.9009009009009,5],
	[25.135135135135133,31.71171171171171,5],
	[23.153153153153152,33.06306306306306,5],
	[28.1981981981982,20.99099099099099,6],
	[31.17117117117117,21.17117117117117,6],
	[34.32432432432432,24.504504504504503,6],
	[33.693693693693696,31.53153153153153,6],
	[26.846846846846844,30.9009009009009,6],
	[27.027027027027028,32.972972972972975,7],
	[24.864864864864867,35.67567567567568,7],
	[24.144144144144146,41.26126126126126,7],
	[32.432432432432435,44.5045045045045,7],
	[33.513513513513516,33.33333333333333,7],
	[33.06306306306306,20.18018018018018,8],
	[35.22522522522522,22.972972972972975,8],
	[33.6036036036036,15.585585585585585,8],
	[42.7027027027027,15.315315315315313,8],
	[42.7027027027027,19.81981981981982,8],
	[42.61261261261261,22.792792792792792,8],
	[35.22522522522522,34.5045045045045,9],
	[34.5945945945946,44.23423423423423,9],
	[38.37837837837838,43.69369369369369,9],
	[43.96396396396396,34.14414414414414,9],
	[35.4054054054054,32.34234234234235,10],
	[36.21621621621622,24.504504504504503,10],
	[43.42342342342342,24.414414414414416,10],
	[46.126126126126124,26.666666666666668,10],
	[46.03603603603604,32.432432432432435,10],
	[45.85585585585585,35.4054054054054,11],
	[39.63963963963964,45.31531531531531,11],
	[59.27927927927929,41.171171171171174,11],
	[60.810810810810814,48.1981981981982,11],
	[45.85585585585585,33.87387387387387,12],
	[58.648648648648646,34.054054054054056,12],
	[58.648648648648646,38.648648648648646,12],
	[44.414414414414416,18.46846846846847,13],
	[44.414414414414416,13.963963963963963,13],
	[53.69369369369369,13.783783783783784,13],
	[53.783783783783775,18.64864864864865,13],
	[44.23423423423423,20.45045045045045,14],
	[44.5045045045045,22.972972972972975,14],
	[47.47747747747748,25.765765765765764,14],
	[54.68468468468468,21.71171171171171,14],
	[55.945945945945944,25.495495495495497,14],
	[44.32432432432433,12.072072072072073,15],
	[44.23423423423423,6.936936936936937,15],
	[52.792792792792795,6.846846846846846,15],
	[53.96396396396397,12.432432432432433,15],
	[56.03603603603604,17.74774774774775,16],
	[54.77477477477477,6.846846846846846,16],
	[55.4954954954955,13.693693693693692,16],
	[62.34234234234234,17.65765765765766,16],
	[59.009009009009006,26.396396396396398,17],
	[62.972972972972975,26.756756756756754,17],
	[66.93693693693695,32.612612612612615,17],
	[60.36036036036037,32.79279279279279,17],
	[47.74774774774775,27.387387387387385,18],
	[47.927927927927925,32.16216216216216,18],
	[57.117117117117125,27.65765765765766,18],
	[58.46846846846847,32.34234234234235,18],
	[60.72072072072072,35.13513513513514,19],
	[65.85585585585586,34.77477477477478,19],
	[65.85585585585586,37.207207207207205,19],
	[65.22522522522523,40.99099099099099,19],
	[60.9009009009009,40.18018018018018,19],
	[64.5945945945946,19.54954954954955,20],
	[68.10810810810811,19.18918918918919,20],
	[62.972972972972975,15.675675675675677,20],
	[56.30630630630631,19.36936936936937,21],
	[57.20720720720721,24.414414414414416,21],
	[62.88288288288288,24.324324324324326,21],
	[63.60360360360361,20.72072072072072,21],
	[66.12612612612612,21.44144144144144,22],
	[69.009009009009,21.08108108108108,22],
	[68.46846846846847,30.720720720720724,22],
	[64.5945945945946,26.126126126126124,22],
	[71.53153153153153,22.162162162162165,23],
	[73.51351351351352,21.53153153153153,23],
	[74.23423423423424,25.945945945945947,23],
	[71.62162162162163,28.64864864864865,23],
	[61.8018018018018,43.15315315315315,24],
	[65.22522522522523,42.88288288288288,24],
	[62.792792792792795,48.1981981981982,24],
	[67.74774774774774,47.02702702702703,24],
	[67.74774774774774,37.92792792792793,25],
	[70.09009009009009,37.747747747747745,25],
	[67.11711711711712,41.711711711711715,25],
	[70.72072072072072,46.126126126126124,25],
	[71.98198198198197,37.2972972972973,26],
	[74.86486486486487,36.75675675675676,26],
	[72.25225225225225,45.04504504504504,26],
	[76.57657657657657,44.054054054054056,26],
	[76.75675675675676,45.67567567567568,27],
	[83.78378378378379,45.67567567567568,27],
	[78.55855855855856,44.054054054054056,28],
	[76.84684684684684,36.57657657657658,28],
	[79.009009009009,36.57657657657658,28],
	[83.33333333333334,40.630630630630634,28],
	[84.32432432432432,38.46846846846847,29],
	[80.63063063063063,35.4054054054054,29],
	[87.29729729729729,35.4054054054054,29],
	[68.46846846846847,34.14414414414414,30],
	[68.1981981981982,35.67567567567568,30],
	[70.8108108108108,35.765765765765764,30],
	[75.22522522522522,34.77477477477478,30],
	[79.009009009009,31.98198198198198,30],
	[70.18018018018019,32.072072072072075,31],
	[71.26126126126127,30.090090090090087,31],
	[75.4054054054054,27.74774774774775,31],
	[77.92792792792793,27.927927927927925,31],
	[78.55855855855856,29.81981981981982,31],
	[79.90990990990991,27.387387387387385,32],
	[82.34234234234235,23.423423423423422,32],
	[85.4954954954955,23.603603603603602,32],
	[81.71171171171171,28.1981981981982,32],
	[72.43243243243244,20.18018018018018,33],
	[75.67567567567568,19.45945945945946,33],
	[75.58558558558559,21.26126126126126,34],
	[80.54054054054053,19.81981981981982,34],
	[80.54054054054053,22.882882882882882,34],
	[78.37837837837837,25.765765765765764,34],
	[75.76576576576576,25.585585585585584,34],
	[81.89189189189189,18.82882882882883,35],
	[88.91891891891892,17.47747747747748,35],
	[89.009009009009,19.90990990990991,35],
	[82.70270270270271,21.71171171171171,35],
	[80.9009009009009,30.090090090090087,36],
	[87.83783783783784,23.783783783783786,36],
	[89.0990990990991,27.837837837837835,36],
	[78.82882882882883,34.5945945945946,37],
	[82.43243243243244,31.261261261261264,37],
	[88.73873873873875,30.090090090090087,37],
	[88.37837837837837,33.96396396396396,37],
	[89.36936936936937,24.684684684684687,38],
	[88.10810810810811,22.07207207207207,38],
	[91.44144144144144,23.513513513513516,39],
	[91.26126126126127,20.81081081081081,40],
	[90.72072072072072,18.28828828828829,40],
	[84.05405405405405,16.576576576576578,41],
	[90.90090090090091,16.666666666666664,41],
	[90.72072072072072,13.873873873873874,41],
	[89.009009009009,9.72972972972973,41],
	[92.97297297297298,15.495495495495495,42],
	[94.41441441441441,15.045045045045043,43],
	[92.25225225225225,14.054054054054054,44],
	[94.41441441441441,13.153153153153152,44],
	[91.08108108108108,8.82882882882883,45],
	[91.62162162162161,12.072072072072073,45],
	[92.97297297297298,8.108108108108109,46],
	[93.6036036036036,11.801801801801801,46],
	[94.77477477477477,8.82882882882883,47],
	[94.14414414414415,7.207207207207207,47]];
	return points;
}