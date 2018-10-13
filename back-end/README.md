<h1>Back-end part</h1>

<br/>
<h2>Project dependency</h2>
<ul> 
    <li><h3>Spring boot framework</h3></li>
    <li><h3>Apache Maven</h3></li>
</ul>

<h2>Install guide</h2>
<br/>
<h4>Link <a href="https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-boot-dev-pack" ><span>Download STS (Spring tool suite)</span></a></h4>
<h4>Link <a href="https://maven.apache.org/download.cgi" ><span>Download Maven</span></a></h4>
<h4>Install Maven guide:</h4>
<ul>
    <li>Just extract zip file to C:\ then you'll get <strong>'C:\apache-maven-3.5.4'</strong> folder</li>
    <li>Require JDK 1.8+ and system variable: <strong>JAVA_HOME: '<span style="font-style: italic">your directory...</span>'</strong></li>
    <li>Add <strong>'C:\apache-maven-3.5.4\bin'</strong> to <strong>Path</strong></li>
</ul>
<h4>Run server guide:</h4>
<ul>
    <li>Open powershell or CMD in <strong>back-end</strong> folder (tip: <strong>Shift + Right-click</strong> in that folder)</li>
    <li>Type <code>mvn spring-boot:run</code></li>
</ul>
<h3>API GUIDE</h3>
<br>
<h4>Search for bus route</h4>
<div>search for all buses</div>
<code>/api/buses</code>
<div>search bus by route</div>
<code>/api/buses/route/{route number}</code>
<div>search by id</div>
<code>/api/buses/{id}</code>
<br>
<h4>Search by map</h4>
<div>Search in bound</div>
<code>/api/stops/getinbounds</code>
<div><strong>param:</strong></div>
<div><code>lng1</code> <span>lng of point 1</span></div>
<div><code>lat1</code> <span>lat of point 1</span></div>
<div><code>lng2</code> <span>lng of point 2</span></div>
<div><code>lat2</code> <span>lat of point 2</span></div>
<div>Search by route</div>
<div><code>/api/stops/route/{route number}</code></div>
<div>Search by Id</div>
<div><code>/api/stops/{id}</code></div>
