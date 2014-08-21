/**
* This is a sample Cinnamon test that updates the Account record
* This Cinnamon test uses AccountPageObject.cls to interact with the Account Edit UI page
*/
public class TestCinnamonSampleTest extends cinnamon.BaseTest {

	public override void setup(cinnamon.Context context) {
        Account acc = new Account();
        acc.name = 'Account' + System.currentTimeMillis();
        insert acc;
        context.put('accId', acc.Id);
    }

    public override String getStartingPath(cinnamon.Context context) {
        String accId = (String) context.get('accId');
        return '/' + accId;
    }

    public override void test(cinnamon.Context context) {
        String accId = (String) context.get('accId');

        AccountPageObject page = (AccountPageObject) context.getPageObject(AccountPageObject.class);
        page.initializePageObject();

        page.clickEdit()
            .typeAccountNameField('Cinnamon Account')
            .typeAccountSiteField('San Francisco')
            .clickSave();

        Account a = [select name, site from Account where Id = :accId];
        System.assert(a != null);
        System.assertEquals(a.name, 'Cinnamon Account');
        System.assertEquals(a.site, 'San Francisco');
    }
    
    public override void tearDown(cinnamon.Context context) {
        List<ID> Ids = new List<ID>();
        Ids.add((String) context.get('accId'));
        Database.delete(Ids);
    }
}