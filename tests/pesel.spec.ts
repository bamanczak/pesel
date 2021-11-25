import { test, expect } from '@playwright/test';
import { PeselPage } from './pesel.page';


test('should display welcome message', async ({ page }) => {
    const peselPage = new PeselPage(page);
    await peselPage.goto();
    expect(await peselPage.getTitleText()).toBe('Walidator PESEL');
});

test('should accept valid PESEL', async ({ page }) => {
    const peselPage = new PeselPage(page);
    await peselPage.goto();
    await peselPage.fillPeselInput('19321212346');
    await peselPage.waitForValidation();
    expect(await peselPage.getValidationMessage()).toEqual('PESEL prawidłowy');
    expect(await peselPage.getBirthDate()).toEqual('12.12.2019');
    expect(await peselPage.getGender()).toEqual('Kobieta');
});

test('should reject invalid PESEL', async ({ page }) => {
    const peselPage = new PeselPage(page);
    await peselPage.goto();
    await peselPage.fillPeselInput('19321212345');
    await peselPage.waitForValidation();
    expect(await peselPage.getValidationMessage()).toEqual('PESEL nieprawidłowy');
});

