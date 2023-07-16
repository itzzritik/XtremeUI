import { ChangeEvent } from 'react';

export type TTextfieldProps = {
	className?: string;
	type?: keyof typeof ETextfieldType;
	textarea?: boolean;
	placeholder: string;
	autoFocus?: boolean;
	autoComplete?: keyof typeof ETextfieldAutoComplete;
	iconName?: string;
	iconFilled?: boolean;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

enum ETextfieldType {
	text = 'text',
	number = 'number',
	password = 'password',
	search = 'search',
}

enum ETextfieldAutoComplete {
	'off' = 'off',
	'on' = 'on',
	'name' = 'name',
	'honorific-prefix' = 'honorific-prefix',
	'given-name' = 'given-name',
	'additional-name' = 'additional-name',
	'family-name' = 'family-name',
	'honorific-suffix' = 'honorific-suffix',
	'nickname' = 'nickname',
	'email' = 'email',
	'username' = 'username',
	'new-password' = 'new-password',
	'current-password' = 'current-password',
	'one-time-code' = 'one-time-code',
	'organization-title' = 'organization-title',
	'organization' = 'organization',
	'street-address' = 'street-address',
	'address-line1' = 'address-line1',
	'address-line2' = 'address-line2',
	'address-line3' = 'address-line3',
	'address-level4' = 'address-level4',
	'address-level3' = 'address-level3',
	'address-level2' = 'address-level2',
	'address-level1' = 'address-level1',
	'country' = 'country',
	'country-name' = 'country-name',
	'postal-code' = 'postal-code',
	'cc-name' = 'cc-name',
	'cc-given-name' = 'cc-given-name',
	'cc-additional-name' = 'cc-additional-name',
	'cc-family-name' = 'cc-family-name',
	'cc-number' = 'cc-number',
	'cc-exp' = 'cc-exp',
	'cc-exp-month' = 'cc-exp-month',
	'cc-exp-year' = 'cc-exp-year',
	'cc-csc' = 'cc-csc',
	'cc-type' = 'cc-type',
	'transaction-currency' = 'transaction-currency',
	'transaction-amount' = 'transaction-amount',
	'language' = 'language',
	'bday' = 'bday',
	'bday-day' = 'bday-day',
	'bday-month' = 'bday-month',
	'bday-year' = 'bday-year',
}
