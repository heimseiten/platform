import template from './sw-settings-mailer-smtp.html.twig';
import './sw-settings-mailer-smtp.scss';

Shopware.Component.register('sw-settings-mailer-smtp', {
    template,

    props: {
        mailerSettings: {
            type: Object,
            required: true
        }
    },

    computed: {
        encryptionOptions() {
            return [
                { value: 'null', label: this.$tc('sw-settings-mailer.encryption.no-encryption') },
                { value: 'ssl', label: this.$tc('sw-settings-mailer.encryption.ssl') },
                { value: 'tls', label: this.$tc('sw-settings-mailer.encryption.tls') }
            ];
        },

        authenticationOptions() {
            return [
                { value: 'null', label: this.$tc('sw-settings-mailer.authentication.no-authentication') },
                { value: 'plain', label: this.$tc('sw-settings-mailer.authentication.plain') },
                { value: 'login', label: this.$tc('sw-settings-mailer.authentication.login') },
                { value: 'cram-md5', label: this.$tc('sw-settings-mailer.authentication.cram-md5') }
            ];
        }
    }
});
