describe('Login within the app', () => {

    beforeEach( ()=> {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/');
        browser.driver.manage().window().maximize();
    });

    describe('Login within the app', () => {
        it('should login within the app', () => {
            clickSignIn();
            addEmail();
            addPassword();
            signIn();
            checkSignIn();
            browser.sleep(4000).then(() => logOut());

            expect(element(by.className('header_user_info')).isPresent()).toBe(true);
        })
    });

    describe('Navigate to the landing page and search for Dresses', () => {
        it('should search for Dresses', () => {
            searchForProduct('Dresses');
            clickSearchBtn();

            expect(element(by.className('page-heading  product-listing')).getText()).toContain('SEARCH  "DRESSES"');
        });
    });

    describe('Select dress product', () => {
        it('should select dress product', () => {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
            clickSignIn();
            addEmail();
            addPassword();
            signIn();
            checkSignIn();
            clickDresses();
            clickCasualDresses();
            selectProduct();
            browser.sleep(4000).then(() => closeBtn());
            browser.sleep(4000).then(() => logOut());
        
            expect(element(by.className('header_user_info')).isPresent()).toBe(true);
        });     
    });

    describe('Add new wishist', () => {
        it('should add new wishlist', () => {
            clickSignIn();
            addEmail();
            addPassword();
            signIn();
            browser.sleep(4000).then(() => goToMyWishlist());
            browser.sleep(4000).then(() => addNewWishList('asd'));
            browser.sleep(4000).then(() => save());
            expect(element(by.className('table table-bordered')).isPresent()).toBe(true);
            
            browser.sleep(4000).then(()=> logOut());
            expect(element(by.className('header_user_info')).isPresent()).toBe(true);
        })
    });

    describe('Search for a non existing product', () => {
        it('should not display any result', () => {
            searchForProduct('Random');
            clickSearchBtn();
            expect(element(by.className('alert alert-warning')).getText()).toContain('No results were found for your search "Random"')

        });
    });
});

function clickSignIn(){
    element(by.className('header_user_info')).click();
}

function addEmail(){
    element(by.id('email')).sendKeys('george.limisovschi@gmail.com')
}

function addPassword(){
    element(by.id('passwd')).sendKeys('123123');
}

function signIn(){
    element(by.id('SubmitLogin')).click();
}

function checkSignIn(){
    element(by.className('icon-heart')).isPresent()
}

function logOut(){
    element(by.className('logout')).click();
}

function searchForProduct(product){
    element(by.id('search_query_top')).sendKeys(product);
}

function clickSearchBtn(){
    element(by.xpath('//*[@id="searchbox"]/button')).click();
}

function clickDresses() {
    element(by.xpath('//*[@id="block_top_menu"]/ul/li[2]/a')).click();
}

function clickCasualDresses(){
    element(by.xpath('//*[@id="categories_block_left"]/div/ul/li[1]/a')).click()
}

function selectProduct() {
    element(by.xpath('//*[@id="center_column"]/ul/li[1]/div/div[1]/div/a[1]')).click();
}

function closeBtn() {
    element(by.className('fancybox-item fancybox-close')).click();
}

function goToMyWishlist() {
    element(by.xpath('//*[@id="center_column"]/div/div[2]/ul/li/a')).click();
}

function addNewWishList(text) {
    element(by.id('name')).sendKeys(text);
}

function save(){
    element(by.id('submitWishlist')).click();
}