/**
* This PageObject class represents the Account Edit UI page,
* and provides the services that TestCinnamonSampleTest needs to execute its test
*/
public class AccountPageObject extends cinnamon.PageObject {

	cinnamon.WebElement saveBtn,
						editBtn,
						accountNameInputField,
						siteInputField;

	public override void initializePageObject() {
		saveBtn = getElement(new cinnamon.ElementLocator('input[name="save"]'));
		editBtn = getElement(new cinnamon.ElementLocator('input[name="edit"]'));
		accountNameInputField = getElement(new cinnamon.ElementLocator('#acc2'));
		siteInputField = getElement(new cinnamon.ElementLocator('#acc23'));
	}

	public AccountPageObject clickSave() {
		if (saveBtn == null) {
			saveBtn = getElement(new cinnamon.ElementLocator('input[name="save"]'));
		}
		saveBtn.click();
		selenium.waitForPageToLoad('3000');
		return this;
	}

	public AccountPageObject clickEdit() {
		if (editBtn == null) {
			editBtn = getElement(new cinnamon.ElementLocator('input[name="edit"]'));
		}
		editBtn.click();
		selenium.waitForPageToLoad('3000');
		return this;
	}

	public AccountPageObject typeAccountNameField(String data) {
		if (accountNameInputField == null) {
			accountNameInputField = getElement(new cinnamon.ElementLocator('#acc2'));
		}
		accountNameInputField.sendKeys(data);
		return this;
	}

	public AccountPageObject typeAccountSiteField(String data) {
		if (siteInputField == null) {
			siteInputField = getElement(new cinnamon.ElementLocator('#acc23'));
		}
		siteInputField.sendKeys(data);
		return this;
	}
}