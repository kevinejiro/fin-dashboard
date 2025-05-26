import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import {
	updateUserProfile,
	fetchUserProfile,
} from '../../../redux/features/userSlice';
import type { UserProfile } from '../../../types/data.d';
import type { ChangeEvent, FormEvent } from 'react';
import InputField from '../../common/InputField/InputField';

const initialProfile: UserProfile = {
	name: '',
	username: '',
	email: '',
	password: '',
	dateOfBirth: '',
	presentAddress: '',
	permanentAddress: '',
	city: '',
	postalCode: '',
	country: '',
	profilePicture: '',
};

const formFields = [
	{ name: 'name', label: 'Your Name', type: 'text' },
	{ name: 'username', label: 'User Name', type: 'text' },
	{ name: 'email', label: 'Email', type: 'email' },
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		autoComplete: 'new-password',
	},
	{ name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
	{ name: 'presentAddress', label: 'Present Address', type: 'text' },
	{ name: 'permanentAddress', label: 'Permanent Address', type: 'text' },
	{ name: 'city', label: 'City', type: 'text' },
	{ name: 'postalCode', label: 'Postal Code', type: 'text' },
	{ name: 'country', label: 'Country', type: 'text' },
];

const EditProfileForm: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();
	const { profile, loading, error } = useSelector(
		(state: RootState) => state.user
	);
	const [form, setForm] = useState<UserProfile>(initialProfile);
	const [profilePicPreview, setProfilePicPreview] = useState<string>('');

	useEffect(() => {
		if (!profile) {
			dispatch(fetchUserProfile());
		} else {
			setForm({ ...profile, password: '' });
			setProfilePicPreview(profile.profilePicture);
		}
	}, [profile, dispatch]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfilePicPreview(reader.result as string);
				setForm((prev) => ({
					...prev,
					profilePicture: reader.result as string,
				}));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(updateUserProfile(form));
	};

	return (
		<div className='p-8 max-w-4xl mx-auto'>
			<form className='space-y-8' onSubmit={handleSubmit}>
				<div className='flex items-center space-x-6 mb-8'>
					<div className='relative'>
						<img
							src={profilePicPreview}
							alt='Profile'
							className='w-20 h-20 rounded-full object-cover border-2 border-indigo-500'
						/>
						<label className='absolute bottom-0 right-0 bg-indigo-600 text-white rounded-full p-1 cursor-pointer shadow-lg hover:bg-indigo-700 transition-colors'>
							<input
								type='file'
								accept='image/*'
								onChange={handleProfilePicChange}
								className='hidden'
							/>
							<span className='text-xs'>✎</span>
						</label>
					</div>
					<div>
						<p className='text-lg font-semibold text-gray-900 mb-1'>
							{form.name || 'Your Name'}
						</p>
						<p className='text-sm text-gray-500'>{form.email || 'Email'}</p>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{formFields.map((field) => (
						<InputField
							key={field.name}
							id={field.name}
							value={form[field.name as keyof UserProfile] || ''}
							onChange={handleChange}
							{...field}
						/>
					))}
				</div>
				<div className='flex justify-end mt-8'>
					<button
						type='submit'
						className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md shadow transition-colors disabled:opacity-50'
						disabled={loading}
					>
						{loading ? 'Saving...' : 'Save'}
					</button>
				</div>
				{error && (
					<div className='text-red-600 text-sm mt-2 text-right'>{error}</div>
				)}
			</form>
		</div>
	);
};

export default EditProfileForm;
