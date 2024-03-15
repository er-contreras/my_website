class ApplicationController < ActionController::Base
  before_action :set_locale

  def set_locale
    # Retrieve the user's preferred language from the request
    user_lang = params[:locale] || request.headers['Accept-Language'] || I18n.default_locale

    # You can implement logic here to map browser language codes to your supported languages
    # For simplicity, let's assume you have a mapping in your application configuration
    available_locales = Rails.application.config.i18n.available_locales
    lang_code = available_locales.include?(user_lang.to_sym) ? user_lang.to_sym : I18n.default_locale

    # Set the locale for the current request
    I18n.locale = lang_code
  end
end
