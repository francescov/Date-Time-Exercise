(function(){
  var d = new Date();
  var month = d.getMonth();
  var day   = d.getDate();
  var year  = d.getFullYear();
  
	document.getElementById('outputdisplay').innerHTML = '<h2>Today\'s Date is ' + year + '-' + (month+1) + '-' + day + '</h2>';

  var date = new Date(year,month,day);

  var theevent = new Array();
  theevent[0] = ['2014-4-24','some title','some description','long description'];
  theevent[1] = ['2014-1-15','some title','some description','long description'];
  theevent[2] = ['2014-5-20','some title','some description','long description'];
  theevent[3] = ['2014-12-21','some title','some description','long description'];
  theevent[4] = ['2014-2-14','some title','some description','long description'];
  theevent[5] = ['2014-2-1','some title','some description','long description'];
  theevent[6] = ['2014-8-15','some title','some description','long description'];
  theevent[7] = ['2014-5-10','some title','some description','long description'];
  theevent[8] = ['2014-6-15','some title','some description','long description'];

  for (var i=0;i<theevent.length;i++) {
    	var mydate = new Date(theevent[i][0]);
    	if (mydate>=date) {
      	document.getElementById('outputdisplay').innerHTML = '<span style="color:green;">'+theevent[i][0]+' is current or the future.<br /></span>';
    	} else {
      document.getElementById('outputdisplay').innerHTML = '<span style="color:red;">'+theevent[i][0]+' is in the past.<br /></span>';
    	}
  }
})();