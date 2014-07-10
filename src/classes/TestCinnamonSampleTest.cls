/**
* This is a sample Cinnamon test
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

        Account a = [select name, site from Account where Id = :accId];
        System.assert(a != null);
    }
    
    public override void tearDown(cinnamon.Context context) {
        List<ID> Ids = new List<ID>();
        Ids.add((String) context.get('accId'));
        Database.delete(Ids);
    }
}