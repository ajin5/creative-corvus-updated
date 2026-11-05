# Updating The Live Site (No Zip Needed)

This is the simple, repeatable way to push any future change to
creative.visibilitidemo.in on Hostinger, without dealing with zip files,
extracting, or moving files out of subfolders.

It works because Hostinger's File Manager lets you drag a folder straight
from your computer into the browser, and it uploads all the files inside
it, in the right place, automatically.

## Every time you want to update the site

### Step 1: Rebuild the project

On your computer, open a terminal inside the `creative-corvus` project
folder and run:

```bash
npm run build
```

Wait for it to finish. This updates the `dist` folder inside your project
with the latest version of the site.

### Step 2: Open two windows side by side

1. Open your computer's file explorer (Windows Explorer or Finder) and
   navigate into `creative-corvus/dist`. Keep this window open.
2. Open Hostinger hPanel in your browser, go to **Websites**, click
   **Manage** on `creative.visibilitidemo.in`, then click **Open** next to
   **File manager**.
3. Inside File Manager, navigate into `public_html`.
4. Arrange both windows so you can see them at the same time (side by
   side on your screen).

### Step 3: Delete the old assets folder and index.html

In File Manager, inside `public_html`:
1. Right click the **assets** folder → **Delete**.
2. Right click **index.html** → **Delete**.

Leave `logo.png`, `robots.txt`, and `sitemap.xml` alone, you only need to
touch those if you specifically changed the logo or those files.

### Step 4: Drag and drop the new files in

From your file explorer window (showing the `dist` folder contents):

1. Click on **index.html**, then hold **Ctrl** (Windows) or **Cmd** (Mac)
   and also click the **assets** folder, so both are selected together.
2. Click and hold on either selected item, and drag it directly into the
   File Manager browser window, into the empty area showing `public_html`.
3. Release to drop. Hostinger will upload both the file and the entire
   folder, keeping the folder structure intact, no zip step needed.
4. Wait for the upload progress to finish.

### Step 5: Check the site

Visit `https://creative.visibilitidemo.in` in a new browser tab (or
refresh if you already had it open) and confirm your changes appear.

## If drag and drop does not work in your browser

Some browsers or file manager versions do not support dragging a folder
in directly. If that happens, fall back to the zip method:

1. Select `index.html` and `assets` together in your `dist` folder.
2. Right click → "Send to" → "Compressed (zipped) folder" (Windows) or
   "Compress" (Mac).
3. Upload that zip using the upload button in File Manager.
4. Right click the uploaded zip → Extract.
5. It will likely extract into a new subfolder. Open that subfolder,
   select everything inside it, and move those items up into
   `public_html` directly (drag them onto the `public_html` breadcrumb
   link at the top, or use a Move option if your file manager has one).
6. Delete the now empty subfolder and the zip file once done.

## A note on logo, robots.txt, and sitemap.xml

These three files rarely change. You only need to re upload them if you
specifically update the logo image, or if new pages get added and the
sitemap needs regenerating. Everything else about a normal content or
design update only touches `index.html` and the `assets` folder.
