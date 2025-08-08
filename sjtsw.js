function SJTSW_GetBrowserLanguages()
{
	return navigator.languages || [navigator.language || navigator.userLanguage];
}

function SJTSW_UpdatePageContent(translations, language)
{
	for (var key in translations[language])
	{
		if (translations[language].hasOwnProperty(key))
		{
			var element = document.getElementById(key);
			if (element)
			{
				element.innerHTML = translations[language][key];
			}
		}
	}
}

function SJTSW_TranslatePage()
{
	var browserLanguages = SJTSW_GetBrowserLanguages();
	var foundLanguage = 'en';

	for (var i = 0; i < browserLanguages.length; i++)
	{
		var langCode = browserLanguages[i].split('-')[0];
		if (translations[langCode])
		{
			foundLanguage = langCode;
			break;
		}
	}

	SJTSW_UpdatePageContent(translations, foundLanguage);
}

// Call the initialization function
SJTSW_TranslatePage();
