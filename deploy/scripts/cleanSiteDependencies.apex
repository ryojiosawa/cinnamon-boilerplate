List<Site> sites = [select id from site where name = 'cinnamon'];
if(sites.size()>0) {
String siteId = sites[0].id;

String conn = '{\"username\": \"batchrunner-stage\",' +
                        '\"access-key\": \"80b5ac5b-e417-4b16-9e30-f9c4cf38bbe1\",' +
                        '\"os\": \"Windows 2003\",' +
                        '\"browser\": \"firefox\",' +
                        '\"browser-version\": \"7\",' +
                                                       '\"name\": \"Clean Site Dependencies\"}';
selenium1.DefaultSelenium s = new selenium1.DefaultSelenium('https://na15.salesforce.com', 'ondemand.saucelabs.com', 80, conn);

s.start();
s.open('/secur/frontdoor.jsp?sid=' + System.UserInfo.getSessionId() + '&retURL=' + EncodingUtil.urlEncode('/' + siteId + '/e', 'UTF-8'));
s.waitForElementPresent('id=thePage:theForm:thePageBlock:thePageBlockSection:urlmapperclass:mapperClass');
s.type('id=thePage:theForm:thePageBlock:thePageBlockSection:urlmapperclass:mapperClass', '');
s.clickAndWait('id=thePage:theForm:thePageBlock:thePageBlockButtons:bottom:save');
s.stop(); 
}
