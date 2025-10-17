# Decap CMS Integration Guide

This project is configured to work with Decap CMS (formerly Netlify CMS) for easy content management without coding.

## What Can You Edit?

- **Team Members**: Add/edit photos, names, roles, and bios
- **Trip Information**: Manage tour details, pricing, descriptions
- **Jerseys**: Update jersey designs, sizes, and descriptions
- **Previous Trip Galleries**: Upload photos from past tours
- **Tour Contract**: Upload and update the PDF contract
- **Site Settings**: WhatsApp number, address, map location

## Setup Instructions

### 1. Deploy to Netlify

1. Push this code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Deploy!

### 2. Enable Netlify Identity

1. In your Netlify site dashboard, go to **Settings > Identity**
2. Click "Enable Identity"
3. Under **Registration preferences**, select "Invite only"
4. Under **External providers**, enable any providers you want (optional)
5. Under **Services > Git Gateway**, click "Enable Git Gateway"

### 3. Invite Yourself

1. Go to **Identity** tab in Netlify dashboard
2. Click "Invite users"
3. Enter your email address
4. Check your email and accept the invitation
5. Set your password

### 4. Access the CMS

1. Visit `https://your-site-name.netlify.app/admin/`
2. Log in with your credentials
3. Start editing content!

## File Structure

Content is stored in JSON files under `/src/data/`:

```
src/data/
├── settings.json       # Site settings
├── team/              # Team member files
├── trips/             # Trip information files
├── jerseys/           # Jersey files
├── galleries/         # Gallery files
└── contract.json      # Contract PDF reference
```

## Updating Images

All images uploaded through the CMS will be saved to `/src/assets/`. The code references these images automatically.

To replace placeholder images manually:
1. Upload new images to `/src/assets/`
2. Update the imports in the component files if needed

## Connecting Data to Components

To use CMS data in your components:

```tsx
import teamData from '@/data/team/member-1.json';

// Then use teamData.name, teamData.role, etc.
```

## Local Development

To test the CMS locally:

```bash
npm install -g decap-server
decap-server
```

Then visit `http://localhost:8080/admin/`

## Troubleshooting

- **Can't access /admin/**: Make sure Netlify Identity is enabled
- **Changes not appearing**: Clear your browser cache and rebuild the site
- **Images not loading**: Check that image paths in JSON match the files in /src/assets/

## Support

For more information, see the [Decap CMS Documentation](https://decapcms.org/docs/intro/)
