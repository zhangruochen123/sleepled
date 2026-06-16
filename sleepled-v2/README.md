# Sleep Tracker - WeChat Mini Program

A complete sleep tracking mini-program with cloud development integration.

## Features

- Track daily sleep records
- View sleep statistics
- Cloud data synchronization
- User profile management

## Quick Start

### 1. Import Project

1. Open WeChat Developer Tools
2. Click **+** to create a new project
3. Select **Import Project**
4. Choose the `sleepled-v2` folder
5. Fill in:
   - **Project Path**: Select `sleepled-v2` folder
   - **AppID**: `wxb18d375bf89cf958`
   - **Project Name**: Sleep Tracker
   - **Development Framework**: Standard
6. Click **Import**

### 2. Associate Cloud Development Environment

1. Click **Cloud Development** in the menu bar
2. Click **Associate Cloud Environment**
3. Select environment: `cloudbase-d7gcjzhmd28e9244c`
4. Click **Confirm**

### 3. Compile and Test

1. Click **Compile** or press Ctrl+B
2. View the preview on the right side
3. Test all pages: Home, Record, Stats, Profile

### 4. Deploy (Optional)

When ready to publish:

1. Click **Upload** button
2. Fill in version number and description
3. Go to WeChat Admin → **Development** → **Version Management**
4. Click **Submit for Review**
5. Wait for approval (1-3 business days)
6. Click **Publish** when approved

## Project Structure

```
sleepled-v2/
├── app.json          # Mini-program configuration
├── app.js            # App entry point
├── app.wxss          # Global styles
├── pages/
│   ├── index/        # Home page
│   ├── record/       # Sleep record page
│   ├── stats/        # Statistics page
│   └── user/         # User profile page
└── images/           # Icon images (to be added)
```

## Configuration

- **AppID**: wxb18d375bf89cf958
- **Cloud Environment**: cloudbase-d7gcjzhmd28e9244c
- **Base Library**: 2.25.0 or higher

## Troubleshooting

### Compilation Fails
- Ensure the project folder is `sleepled-v2`
- Check that AppID is correct
- Update to the latest Developer Tools version

### Cloud Functions Not Found
- Verify environment association
- Check that cloud functions are uploaded
- Review console logs for errors

## Next Steps

1. Add icon images to the `images/` folder
2. Integrate cloud functions for data persistence
3. Implement real data synchronization
4. Customize colors and styles
5. Submit for WeChat review and publish

## License

MIT
